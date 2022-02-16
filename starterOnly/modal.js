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
//