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

// Click "je m'inscrit"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement formulaire (changement du display en block)
function launchModal() {
  modalbg.style.display = "block";
}

//fermer le formulaire avec la croix
const modalclose = document.querySelector(".close");
modalclose.addEventListener("click", closeForm)
function closeForm() {
  modalbg.style.display = "none";
}

//le formulaire ne se ferme pas si le champ est vide
let formul = document.getElementById('myForm')

formul.addEventListener('submit', function(e){
    let myInput = document.getElementById('first')
    
    if (myInput.value == "") {
      let myError = document.getElementsByClassName('alertevide')
      myError.innerHTML = 'le champs est requis'
      e.preventDefault();
    }
})

//validation form
const nom = document.querySelector('#last')
const email = document.querySelector('#email')
const dte = document.querySelector('#birthdate')
const quantity = document.querySelector('#quantity')




function validate() {
  const prenom = document.getElementById('first').value
  let prenomValide = prenom.length >= 2
  
  if(prenomValide) {
      console.log('GOOOOOOOOOOOOOOOOOOOOOD')
      alert('OK')
    } else {
        console.log('2 chars min')
        alert('no')
        let a
        document.classList.add("alertePrenom").style.display='block'

        // document.classAdd('alertePrenom').style.display='block'
  }
  return prenomValide
}


// let prenom = document.getElementById('first')
// function validate() {
//   if(prenom.value == "") {
//     alert()
//     document.classList.add('small').style.display = 'inline'
//     return false
//   } else {
//     console.log(prenom)
//   }
// }

// form validation 2
// const form = document.getElementsByTagName('form')
// const prenom = document.getElementById('first')
// const nom = document.getElementById('last')
// const mail = document.getElementById('email')
// const birthdate = document.getElementById('birthdate')
// const players = document.getElementById('quantity')


// form.addEventListener('submit', (e) => {
//   e.preventDefault()

//   checkInputs()
// })

// function validate() {
//   const prenomValue = prenom.value.trim()
//   const nomValue = nom.value.trim()
//   const mailValue = mail.value.trim()
//   const brithdateValue = birthdate.value.trim()
//   const playersValue = players.value.trim()

//   if(prenomValue === '' || prenomValue <= 2) {
//     console.log('empy')
//   } else {
//     console.log('okokokokko')
//   }
// }