//****************DATOS EMAILJS**************
const publicKey = 'QibnWqwETvqNy8ET-'; 
const contactService = 'services_bortoli';
const contactForm = 'template_nv5khrm';
//*******************************************

//**************************CARTELES STATUS EMAIL*****************************************************
const successEmail = '<div class="status success"><span id="bold">Email</span> enviado exitosamente</div>';
const errorEmail = '<div class="status error">Ingrese un <span id="bold">Email</span> válido</div>';
const errorEmailApi = '<div class="status error">Algo fallo en el envío, por favor intente mas tarde</div>';
//**************************CARTELES STATUS EMAIL*****************************************************

//**************************ELEMENTOS DOM*************************************************************
const statusEmail = document.getElementById("statusEmail"); //seccion donde se publica el status del Email
const emailValue = document.getElementById("email"); //Input email
const removeStatusMail = document.getElementsByClassName("status");
//****************************************************************************************************

emailjs.init(publicKey);

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        statusEmail.innerHTML = loader;                
        if (validateEmail(emailValue.value)) {
            event.preventDefault();
            emailjs.sendForm(contactService, contactForm, this)
                .then(function() {
                    setTimeout(function() {statusEmail.innerHTML = successEmail;},1500);
                }, function(error) {
                    setTimeout(function() {statusEmail.innerHTML = errorEmailApi;},1500);
                });
        }else{
            setTimeout(function() {statusEmail.innerHTML = errorEmail;},1500);
        }
        setTimeout(function() {removeStatusMail[0].remove();},10000);  
    });
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }