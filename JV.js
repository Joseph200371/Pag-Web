function showAlert() {
    alert("Hola, esto es un alerta");
  }

  const botonDos = document.getElementById("botonDos");
  function presionar() {
    alert("este es otro alerta más complicado de hacer");
  }

  botonDos.addEventListener("click", presionar);

  const form = document.getElementById('miFormulario');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
    }
    function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
    }

    document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
      document.querySelector(".nav-links").classList.toggle("nav-links-responsive")}
                    )