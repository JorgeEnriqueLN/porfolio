// ==========================================================
// 1. CÓDIGO DEL CARRUSEL DE IMÁGENES (Proyectos)
// ==========================================================
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los contenedores de sliders en la página
    const sliders = document.querySelectorAll('.slider-container');
    const intervalTime = 3000; // 3000 milisegundos = 3 segundos

    // Función que avanza el slider
    function nextSlide(slider) {
        // 1. Encontrar la imagen activa actual en este slider
        const currentActive = slider.querySelector('.slider-img.active');
        
        // 2. Remover la clase 'active' de la imagen actual
        currentActive.classList.remove('active');
        
        // 3. Determinar la próxima imagen
        let nextActive = currentActive.nextElementSibling;

        // Si la imagen actual es la última, volvemos a la primera
        if (!nextActive || !nextActive.classList.contains('slider-img')) {
            nextActive = slider.querySelector('.slider-img');
        }

        // 4. Agregar la clase 'active' a la nueva imagen
        nextActive.classList.add('active');
    }

    // Inicializar el carrusel para CADA proyecto-tarjeta
    sliders.forEach(slider => {
        // Ejecuta la función nextSlide para este slider cada X segundos
        setInterval(() => nextSlide(slider), intervalTime);
    });


    // ==========================================================
    // 2. CÓDIGO DEL BOTÓN "VOLVER ARRIBA"
    // ==========================================================


    // 1. Obtener el botón por su ID
    const btnArriba = document.getElementById("btnVolverArriba");
    
    // Si el botón no existe, detenemos la ejecución (por seguridad)
    if (!btnArriba) return; 

    // 2. Función que maneja la aparición/ocultamiento del botón
    window.onscroll = function() {
        // Si el scroll vertical es mayor a 200px (o el valor que decidas)
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnArriba.classList.add("mostrar"); // Añade la clase que lo hace visible (CSS)
        } else {
            btnArriba.classList.remove("mostrar"); // Oculta la clase
        }
    };

    // 3. Función que maneja el desplazamiento al hacer clic
    btnArriba.addEventListener('click', function() {
        // Desplazamiento suave al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hace que el scroll no sea instantáneo
        });
    });

    // ==========================================================
    // CÓDIGO PARA MOSTRAR LA FECHA ACTUAL
    // ==========================================================

      const fechaElemento = document.getElementById('fechaActual');
    const yearElemento = document.getElementById('year');
    
    // Obtener la fecha de hoy
    const fecha = new Date();
    
    // Opcional: Mostrar solo el año para el copyright
    if (yearElemento) {
        yearElemento.textContent = fecha.getFullYear();
    }
    
    // Mostrar la fecha completa en formato local (DD/MM/AAAA)
    if (fechaElemento) {
        // Formatear la fecha como una cadena legible (ej: 11/10/2025)
        const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
        fechaElemento.textContent = fecha.toLocaleDateString('es-ES', opciones); 
        // Puedes cambiar 'es-ES' por 'en-US' o el formato que prefieras.
    }

   
    // ==========================================================
    // CÓDIGO PARA OCULTAR/MOSTRAR PROYECTOS
    // ==========================================================
    
    // 1. Seleccionar todos los títulos que funcionarán como toggles
    const toggles = document.querySelectorAll('.toggle-titulo');

    toggles.forEach(titulo => {
        titulo.addEventListener('click', function() {
            
            // 2. Localizar el elemento que sigue inmediatamente después del título, 
            //    que es el div.proyecto-detalle.
            const detalle = this.nextElementSibling; 
            
            // 3. Verificar si el elemento encontrado es realmente el detalle
            if (detalle && detalle.classList.contains('proyecto-detalle')) {
                // 4. Alternar la clase 'abierto'
                detalle.classList.toggle('abierto');
            }
        });
    });
});