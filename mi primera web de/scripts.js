    // Obtener referencia al formulario
    var form = document.getElementById("contact-form");

    // Agregar evento de submit al formulario
    form.addEventListener("submit", function(event) {
      // Detener el envío del formulario
      event.preventDefault();

      // Validar el formulario
      if (validateForm()) {
        // Si el formulario es válido, mostrar una alerta
        alert("Formulario enviado correctamente");
        // Aquí puedes agregar el código para enviar el formulario a través de AJAX o realizar otras acciones necesarias
      }
    });

    // Función para validar el formulario
    function validateForm() {
      // Obtener los valores de los campos del formulario
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Realizar la validación, por ejemplo:
      if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario");
        return false; // El formulario no es válido
      }

      return true; // El formulario es válido
    }