//Validación capturando el evento submit del formulario // sin codido Js en el HTML

//Se define un manejador para el evento "DOMContentLoaded". Este manejador nos asegura que el resto del código que se va a ejecutar se realice cuando verdaderamente el navegador esté listo para ejecutarlo.

//Luego realizamos un manejador para el evento "submit" del formulario. Como manejador para este segundo evento indicamos la función "validarFormulario()"

// La función validarFormulario() recibe como parámetro el objeto evento. Esto es algo que ocurre con todos los manejadores de eventos Javascript. Este objeto "evento" tiene el comportamiento predeterminado del envío del formulario, que hemos detenido con la instrucción "evento.preventDefault()".

//Se valida cada input, para estudiar si son correctos o no. En el caso que no lo sean, mostramos un mensaje en una caja de alerta y luego salimos de la función con "return". Ese return permite que, una vez que se ha detectado un error, no se siga ejecutando el código de la función.

//si no se salió por ninguna de las validaciones incorrectas, entonces enviamos el formulario. Esto lo realizamos con el método submit() del formulario. Como estamos dentro de un manejador de evento definido por el formulario, la variable "this" corresponde con el propio formulario. Por ello, el envío lo podemos realizar con un simple "this.submit()".




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    //validar que ingrese nombre
    let name = document.getElementById('nombre').value;
    if(name.length == 0) {
      alert('Por favor ingrese su nombre');
      return;
    }

    //validar que ingrese mail con formato correcto con expresiones regulares
    regexEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let email = document.getElementById('email').value;
    if (email.length < 6) {
      alert('Ingrese un email válido');
      return;
      
    } else if(regexEmail.test(email)){
        console.log("La dirección de email " + email + " es correcta.");
    } else{
        alert("Ingrese un email válido");
        return;
    }
    
    //validar que ingrese telefono con formato correcto con expresiones regulares
    //valida primero que phoneNum sea un numero
    // Toma como opcionales:
    //   el prefijo internacional (54)
    //   el prefijo internacional para celulares (9)
    //   el prefijo de acceso a interurbanas (0)
    //   el prefijo local para celulares (15)
    // Es obligatorio:
    //   el código de área (11, 2xx, 2xxx, 3xx, 3xxx, 6xx y 8xx)
    //   (no toma como válido un número local sin código de área como 4444-0000)

    let regexPhone=/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    let phoneNum = document.getElementById('celular').value;
    if(isNaN(phoneNum)) {
      alert("Ingrese un número válido"); 
      return;   
    } else if(regexPhone.test(phoneNum)){
      console.log(`el numero + ${phoneNum}+ es un número valido`);
    }else {
      alert("Ingrese un número válido");
      return;

    }

    //validando campo mensaje

    let msj = document.getElementById('mensaje').value;
    console.log(msj);
    if(msj.length == 0) {
      alert('Por favor ingrese su consulta');
      return;
    }

    alert("Muchas gracias por enviar su consulta :) ");
    
    this.submit();
  }

