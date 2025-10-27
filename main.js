/* Espera a que todo el contenido del DOM (la página) se cargue 
   antes de intentar ejecutar cualquier código */
window.addEventListener('DOMContentLoaded', (event) => {

    /* ======================================================= */
    /* CÓDIGO 1: HEADER STICKY (Efecto Scroll)        */
    /* ======================================================= */

    // 1. Seleccionamos el elemento <header>
    const header = document.querySelector('header');

    // 2. Es una buena práctica comprobar que el elemento SÍ existe
    if (header) {
        
        // 3. Creamos la función que revisa el scroll
        function manejarScroll() {
            // window.scrollY nos dice cuántos píxeles hemos bajado
            if (window.scrollY > 50) {
                // Si bajamos más de 50px, AÑADIMOS la clase CSS
                header.classList.add('header-scrolled');
            } else {
                // Si estamos arriba, QUITAMOS la clase CSS
                header.classList.remove('header-scrolled');
            }
        }
        
        // 4. "Escuchamos" el evento 'scroll' en toda la ventana
        // y llamamos a nuestra función cada vez que pase.
        window.addEventListener('scroll', manejarScroll);
    }
    

    /* ======================================================= */
    /* CÓDIGO 2: MENÚ HAMBURGUESA (Móvil)             */
    /* ======================================================= */

    // 1. Seleccionamos el botón y el menú que debe abrir
    const botonMenu = document.querySelector('#menu-hamburguesa');
    const menuPrincipal = document.querySelector('#menu-principal');

    // 2. Comprobamos que ambos elementos existan
    if (botonMenu && menuPrincipal) {
        
        // 3. "Escuchamos" el evento 'click' en el BOTÓN
        botonMenu.addEventListener('click', () => {
            
            // 4. ¡LA MAGIA! Usamos 'toggle'
            // Esto añade la clase 'menu-abierto' si no la tiene,
            // y la quita si ya la tiene.
            menuPrincipal.classList.toggle('menu-abierto');
            
        });
    }

}); // Fin del 'DOMContentLoaded'
