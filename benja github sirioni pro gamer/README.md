# Portfolio personal

Sitio web estático de Benjamín Bertañan, estudiante de 7.º año de Técnico en Programación. Presenta su perfil y SOP (Sistema de Organización del Personal), un proyecto para organizar turnos rotativos. Está preparado para publicarse directamente en GitHub Pages; no requiere servidor ni proceso de compilación.

## Tecnologías

- HTML5 semántico
- CSS3 responsive
- JavaScript Vanilla
- Google Fonts (Manrope y DM Mono), con tipografías de sistema como alternativa

## Estructura

```text
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── img/
│       ├── benjamin-bertanan.jpg
│       └── README.txt
└── README.md
```

## Personalización

1. En `index.html`, actualizá el nombre, la presentación y los datos de formación si necesitás cambiarlos.
2. Actualizá el correo visible en la sección de contacto (`tu.correo@ejemplo.com`) y la constante `contactAddress` de `js/script.js` con la misma dirección real.
3. Reemplazá los textos pendientes de GitHub y LinkedIn por enlaces a tus perfiles. No publiques perfiles ajenos.
4. Podés cambiar el año que aparece en el rótulo de la portada si lo deseás; el año del pie de página se actualiza automáticamente.
5. Si querés cambiar colores, editá las variables CSS al principio de `css/styles.css`. El tema oscuro/claro se controla con las variables de tema.

### Agregar una fotografía

La foto actual se encuentra en `assets/img/benjamin-bertanan.jpg`. Para cambiarla, guardá una imagen optimizada, preferentemente WebP, en `assets/img/` y actualizá el `src` de la etiqueta de foto en `index.html`. Conservá el texto `alt` descriptivo y podés ajustar `object-position` en `.portrait-image` dentro de `css/styles.css`.

Usá una fotografía propia o con permiso de uso.

### Agregar proyectos

La sección de proyectos actualmente muestra solo SOP, con su descripción real. Cuando tengas los datos, completá las tecnologías utilizadas y los enlaces públicos al repositorio y a la demo. Para agregar una captura, guardá el archivo en `assets/img/`, agregá una etiqueta `<img>` con `alt` descriptivo y definí su presentación en `css/styles.css`. No agregues enlaces ficticios.

## Probar localmente

Abrí `index.html` directamente en un navegador moderno. Como el sitio solo usa archivos estáticos, también podés publicar la carpeta sin instalar dependencias. Se recomienda probar navegación, selector de tema, formulario `mailto:` y vistas móvil/tablet/escritorio.

## Publicar en GitHub Pages

1. Creá un repositorio **público** en GitHub.
2. Subí los archivos y carpetas de este proyecto a la raíz del repositorio. `index.html` debe quedar en esa raíz.
3. Abrí el repositorio y entrá en **Settings**.
4. En el menú lateral, seleccioná **Pages**.
5. En **Build and deployment**, elegí **Deploy from a branch**.
6. Seleccioná la rama `main` y la carpeta `/(root)` (root).
7. Presioná **Save** y esperá a que termine el despliegue.
8. La página de GitHub Pages mostrará la URL pública, habitualmente `https://USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Si el repositorio se llama `USUARIO.github.io`, la URL suele ser `https://USUARIO.github.io/`. Los cambios pueden tardar unos minutos en publicarse. El sitio usa rutas relativas para funcionar tanto en un dominio de usuario como en un proyecto de GitHub Pages.

## Datos pendientes antes de publicar

- Nombre de la institución educativa, si querés mostrarlo.
- Dirección de correo real, configurada tanto en el HTML como en `js/script.js`.
- URL de GitHub y de LinkedIn.
- Tecnologías utilizadas por SOP, captura del sistema, repositorio y demo, si están disponibles.
- Datos de otros proyectos, si querés agregarlos más adelante.

El formulario no almacena ni envía datos a un servidor: valida los campos y prepara un correo en la aplicación de correo del visitante una vez configurada la dirección real.
