const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

let slides = document.querySelectorAll(".slide");
let index = 0;

function slider(){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(slider,4000);



const faders = document.querySelectorAll('.fade-up');

const options = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-left, .fade-right');
    if('IntersectionObserver' in window){
      const observer = new IntersectionObserver((entries, obs)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      fadeElements.forEach(el => observer.observe(el));
    } else {
      fadeElements.forEach(el => el.classList.add('show'));
    }
  });




  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const thankCard = document.getElementById('thankYouCard');
  
    form.addEventListener('submit', async (e)=>{
      e.preventDefault(); // prevent default page reload
  
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
  
      if(response.ok){
        form.reset();
  
        // Show glowing card
        thankCard.classList.add('show');
  
        // Hide card after 3 seconds
        setTimeout(() => {
          thankCard.classList.remove('show');
        }, 3000);
  
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    });
  });