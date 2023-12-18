let btn = document.querySelector('.burger'); //.DÉFINIR btn COMME élément du DOM avec la classe "burger"
let navbar = document.querySelector('.navbar');//DÉFINIR navbar COMME élément du DOM avec la classe "navbar"
let itext = document.getElementById('itext');//DÉFINIR itext et ihtml COMME éléments du DOM affichant le code hexadécimal trois lignes 
let ihtml = document.querySelector('#ihtml'); // DÉFINIR itext et ihtml COMME éléments du DOM affichant le code hexadécimal de la croix

itext.innerText = "le code hexadecimale pour la croix est &#x2715;"
ihtml.innerHTML = "le code hexadecimale pour la croix est &#x2715;"

btn.addEventListener('click', ()=>{     //ATTACHER un événement 'click' à btn

    navbar.classList.toggle('active');   //TOGGLE la classe "active" sur navbar à chaque clic sur btn
  
    if (navbar.classList.contains('active')) {    //SI navbar a la classe "active" ALORS affiche une croix sur btn SINON affiche trois lignes horizontales sur btn
      btn.innerHTML = "&#x2715;";  // croix
    } else {
      btn.innerHTML = "&#x2630;";  // 3 lignes
    }
  
  })