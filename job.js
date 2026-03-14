// Scroll animation

const cards = document.querySelectorAll(
    ".about-card, .industry-card"
    );
    
    const reveal = () => {
    
    cards.forEach(card => {
    
    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;
    
    if(cardTop < windowHeight - 100){
    
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
    
    }
    
    });
    
    };
    
    window.addEventListener("scroll", reveal);
    
    reveal();
    
    
    
    // Button click animation
    
    document.querySelectorAll(".btn").forEach(btn=>{
    
    btn.addEventListener("click", ()=>{
    
    alert("Contact page coming soon!");
    
    });
    
    });