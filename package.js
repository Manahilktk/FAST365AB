const items=document.querySelectorAll(".step");

function reveal(){

const trigger=window.innerHeight*0.85;

items.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

items.forEach(item=>{
item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="0.6s";
});