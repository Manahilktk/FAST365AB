const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e){

e.preventDefault();

fetch(form.action,{
method:"POST",
body:new FormData(form),
headers:{
'Accept':'application/json'
}
})
.then(response=>{

if(response.ok){

popup.style.display="flex";
form.reset();

}

});

});

function closePopup(){

popup.style.display="none";

}

const subscribeForm = document.getElementById("subscribeForm");
const msg = document.getElementById("subscribeMsg");

subscribeForm.addEventListener("submit", function(e){

e.preventDefault();

msg.style.display = "block";

subscribeForm.reset();

});