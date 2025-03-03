// Lista de archivos HTML a paginar
const paginas = ["Tess.html", "pagina2.html", "pagina3.html"];
let paginaActual = 0;

function cambiarPagina(direccion) {
    paginaActual += direccion;

    // Evitar salir de los límites
    if (paginaActual < 0) paginaActual = 0;
    if (paginaActual >= paginas.length) paginaActual = paginas.length - 1;

    // Cambiar el src del iframe
    document.getElementById("iframeContent").src = paginas[paginaActual];

    // Actualizar la información de la página
    document.getElementById("pageInfo").textContent = `Página ${paginaActual + 1} de ${paginas.length}`;

    // Deshabilitar botones si es necesario
    document.getElementById("prevBtn").disabled = paginaActual === 0;
    document.getElementById("nextBtn").disabled = paginaActual === paginas.length - 1;
}

// Inicializar la paginación
cambiarPagina(0);