function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const parti = document.querySelectorAll('.btn-submit');

// Click "je m'inscrit"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//fermer le formulaire avec la croix
const modalclose = document.querySelector(".close");
modalclose.addEventListener("click", closeForm)
function closeForm() {
  modalbg.style.display = "none";
}

//Mes constantes
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const champmail = document.querySelector('#email');
const champbirth = document.querySelector('#birthdate');
const champtournois = document.querySelector('#quantity');
const champcondition = document.querySelector('#checkbox1')

const contactForm = document.querySelector('#myForm');

// const alertefirst = document.querySelector('.alertePrenom');
const alertefirst = document.querySelector('#alerte1');
const alertelast = document.querySelector('#alerte2');
const alertemail = document.querySelector('#alerte3');
const alertebirth = document.querySelector('#alerte4');
const alertetournois = document.querySelector('#alerte5');
const alerteville = document.querySelector('#alerte6');
const alertecondition = document.querySelector('#alerte7');


// Lancement formulaire (changement du display en block)
function launchModal() {
  modalbg.style.display = "block";
  contactForm.reset();
};

// function exitModal() {
//   modalbg.style.display = "none";
//   contactForm.submit();
// };


function validate(){

  let errorVerif = false;
  let regex1 = /^[A-Za-z\ \-\']+$/;
  let regex2 = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
  let regex3 = /^[0-9]|[1-9][0-9]+$/;


  if((firstName.value === '') || (firstName.value.length < 2) || (!firstName.value.match(regex1))){
    alertefirst.innerHTML = 'Veuillez entrer au moins 2 caractères valables.';
    // alertefirst.style.display = "block";
    firstName.focus();
    errorVerif = true;
    // alert('NONONO');
  } else {
      // alert('OK');
      alertefirst.style.display = 'none';
      // document.getElementByClassName('alertevide').innerHTML = '';
  }


  if((lastName.value === '') || (lastName.value.length < 2) || (!lastName.value.match(regex1))){
    alertelast.innerHTML = 'Veuillez entrer au moins 2 caractères valables.';
    lastName.focus();
    errorVerif = true;
    // alert('NONONO');
  } else {
    alertelast.style.display = 'none';
    // alert('OK');
  }


  if((champmail.value === '') || (!champmail.value.match(regex2))){
    alertemail.innerHTML = 'Veuillez saisir une adresse mail valide.';
    champmail.focus();
    errorVerif = true;
  } else {
    alertemail.style.display = 'none';
  }

  
  if(champbirth.value === ''){
    alertebirth.innerHTML = 'Veuillez saisir une date valide.';
    errorVerif = true;
  } else {
    alertebirth.style.display = 'none';
  }


  if((champtournois.value === '') || (!champtournois.value.match(regex3))){
    alertetournois.innerHTML = 'veuillez saisir une valeur numérique.';
    errorVerif = true;
  } else {
    alertetournois.style.display = 'none';
  }


  if(!document.querySelector('input[name = "location"]:checked')){
    alerteville.innerHTML = 'Veuillez sélectionner une ville.';
    errorVerif = true;
    // alert('no')
  } else {
    alerteville.style.display = 'none';
    // alert('ok')
  }


  if(!champcondition.checked){
    alertecondition.innerHTML = 'veuillez accepter les conditions générales';
    errorVerif = true;
  } else {
    alertecondition.style.display = 'none';
  }


  if (errorVerif === true) {
    return false;
  } else {
    return true;
  }

}

// contactForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   // validate();
//   const newLocal = validate(); //supprimer
//   if(newLocal){} //à supprimer
// })

const submitModal = document.querySelector(".btn-submit");
submitModal.addEventListener("click", test); 
const salutation = document.querySelector(".salutation");

function test(event) {
  event.preventDefault();
  if (!validate()) {
    return false;
  } else {
    contactForm.style.display = "none";
    salutation.style.display = "block";
  }
};

const submit2Modal = document.querySelector(".btn-submit2");
submit2Modal.addEventListener("click", closeForm);






// const firstName = document.querySelector('#first');

// const firstValidate = () =>{
//   const nameOk = false;
//   const nbChar = 2;
//   const firstValue = firstName.value;

//   if(firstValue > nbChar) {
//     alert('input ok')
//   } else {
//     alert('input NOT OK')
//   }
  
// }

// const contactForm = document.querySelector('#myForm');

// contactForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   let firstValidateOK = validate();

//   if(firstValidateOK){
//     console.log('ok')
//   }
// })