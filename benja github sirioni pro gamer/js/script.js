"use strict";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navigationLinks = navigation.querySelectorAll('a[href^="#"]');
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const yearElement = document.querySelector("#current-year");
const contactAddress = "tu.correo@ejemplo.com";

function setTheme(theme) {
  root.dataset.theme = theme;
  const isLight = theme === "light";
  themeToggle.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
  themeToggle.setAttribute("aria-pressed", String(isLight));
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
  savedTheme = null;
}
setTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {
    formNote.textContent = "El tema cambiará durante esta visita, pero el navegador no permite guardarlo.";
  }
});

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  navigation.classList.toggle("is-open", !isOpen);
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.addEventListener("click", (event) => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

yearElement.textContent = String(new Date().getFullYear());

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  if (contactAddress === "tu.correo@ejemplo.com") {
    formNote.textContent = "Antes de usar el formulario, reemplazá tu.correo@ejemplo.com por tu dirección real en js/script.js.";
    return;
  }
  const formData = new FormData(contactForm);
  const subject = `Mensaje de ${formData.get("name")}`;
  const body = `Nombre: ${formData.get("name")}\nCorreo: ${formData.get("email")}\n\n${formData.get("message")}`;
  window.location.href = `mailto:${contactAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = "Se está abriendo tu aplicación de correo con el mensaje preparado. No se envió desde este sitio.";
});
