//****************DATOS EMAILJS**************
const publicKey = 'QibnWqwETvqNy8ET-'; 
const contactService = 'services_bortoli';
const contactForm = 'template_nv5khrm';
//*******************************************

//**************************CARTELES STATUS EMAIL*****************************************************
const successEmail = '<div class="status success"><span id="bold">Email</span> enviado exitosamente</div>';
const errorEmail = '<div class="status error">Ingrese un <span id="bold">Email</span> válido</div>';
const errorEmailApi = '<div class="status error">Algo fallo en el envío, por favor intente mas tarde</div>';
const errorInputs = '<div class="status error">Debe completar todos los campos</div>';
//**************************CARTELES STATUS EMAIL*****************************************************

//**************************ELEMENTOS DOM*************************************************************
const statusEmail = document.getElementById("statusEmail"); //seccion donde se publica el status del Email
const emailValue = document.getElementById("email"); //Input email
const nameValue = document.getElementById("name"); //Inpunt nombre
const messaje = document.getElementById("messaje");//Input Mensaje
const form = document.getElementById("contact-form"); //formulario
//****************************************************************************************************

emailjs.init(publicKey);

window.onload = function() {
    form.addEventListener('submit', function(event) {
        
        statusEmail.innerHTML = loader;                
        
        if (validateEmail(emailValue.value) && nameValue.value != "" && messaje.value != "") {
            event.preventDefault();
            emailjs.sendForm(contactService, contactForm, this)            
            .then(function() {
                statusEmail.innerHTML = successEmail;
            }, function(error) {
                statusEmail.innerHTML = errorEmailApi;
            });
        }else{
            if (nameValue.value == "" || messaje.value == "") {
                statusEmail.innerHTML = errorInputs;
            }else{
                statusEmail.innerHTML = errorEmail;
            }
        } 
    });}
    

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }