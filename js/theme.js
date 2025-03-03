document.addEventListener("DOMContentLoaded", function () {
    const estilos = document.getElementById("estilos");
    const toggleTema = document.getElementById("toggleTema");
    const cssGuardado = localStorage.getItem("cssActivo") || "css/modoClaro.css";

    estilos.href = cssGuardado;
    toggleTema.checked = (cssGuardado === "css/modoObscuro.css");

    toggleTema.addEventListener("change", function () {
        const nuevoCSS = this.checked ? "css/modoObscuro.css" : "css/modoClaro.css";
        estilos.href = nuevoCSS;
        localStorage.setItem("cssActivo", nuevoCSS);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fondos = document.getElementById("fondos");
    const toggleTema = document.getElementById("toggleTema");
    const cssGuardado = localStorage.getItem("cssActivo") || "css/fondoClaro.css";

    estilos.href = cssGuardado;
    toggleTema.checked = (cssGuardado === "css/fondoObscuro.css");

    toggleTema.addEventListener("change", function () {
        const nuevoCSS = this.checked ? "css/fondoObscuro.css" : "css/fondoClaro.css";
        fondos.href = nuevoCSS;
        localStorage.setItem("cssActivo", nuevoCSS);
    });
});
