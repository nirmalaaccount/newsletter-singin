const btn = document.querySelector('.btn');
const popupOverlay = document.querySelector('.popup-overlay');
const popupThanks = document.querySelector('.popup-thanks');


btn.addEventListener('click', function(){
    popupOverlay.style.display="block"
    popupThanks.style.display="block"
})
 

const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', function(){
    popupOverlay.style.display="none"
    popupThanks.style.display="none"
})


function validation(){
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const text = document.getElementById('text');

    const pattern = "^(()?\\d{3}())?(-|\\s)?\\d{3}(-|\\s)?\\d{4}$";

    if(email.match(pattern)){
        text.innerHTML = "your email address in valid.";
        text.style.color="#00ff00"; 
    }
    else{
        text.innerHTML = "please enter valid address.";
        text.style.color="#ff0000";
    }
    



}


