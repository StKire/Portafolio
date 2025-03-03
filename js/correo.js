function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('Formulario enviado:\nNombre: ' + nombre + '\nEmail: ' + email + '\nMensaje: ' + mensaje);
        // Aquí puedes agregar la lógica para enviar el formulario a tu servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function copiarCorreo() {
    const correo = "alegpx058@gmail.com";
    navigator.clipboard.writeText(correo).then(() => {
        alert("Correo copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el correo: ", err);
    });
}