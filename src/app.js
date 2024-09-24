import 'bootstrap'

document.querySelectorAll('.dropdown-toggle').forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
        // Prevenir comportamiento predeterminado del enlace
        e.preventDefault();
        
        const dropdownParent = this.parentElement  // Obtener el contenedor del menú clicado
        const dropdownMenu = this.nextElementSibling;      // Obtener el submenú relacionado

        // Obtener las coordenadas del menú y del cuerpo de la página
        const rect = dropdownMenu.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        //  console.log(rect.left)
        // Verificar si el menú se sale de la pantalla por la derecha o izquierda y ajustar
        if (rect.right > bodyRect.right) {
            // Si el menú se sale por la derecha, añadir la clase "dropstart" para alinearlo a la izquierda
            dropdownParent.classList.remove('dropend');
            dropdownParent.classList.add('dropstart');
        } else if (rect.left < 0) {
            // Si el menú se sale por la izquierda, añadir la clase "dropend" para alinearlo a la derecha
            console.log(rect.left)
            dropdownParent.classList.remove('dropend');
            dropdownParent.classList.add('dropstart d');
        }       
    });
});
