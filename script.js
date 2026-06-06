/* =========================
   KNOWYOURSELF JAVASCRIPT
========================= */

/* Navbar Active Link */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    if(link.href === window.location.href){
        link.style.color = "#38bdf8";
        link.style.fontWeight = "bold";
    }

});


/* Smooth Fade Animation */

const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, index * 200);

    });

});


/* Typing Effect */

const tagline = document.querySelector(".tagline");

if(tagline){

    const text = "Lifelong Learner & Dynamic Professional";

    let i = 0;

    tagline.innerHTML = "";

    function typingEffect(){

        if(i < text.length){

            tagline.innerHTML += text.charAt(i);

            i++;

            setTimeout(typingEffect, 60);
        }
    }

    typingEffect();
}


/* Dynamic Greeting */

const homeContainer = document.querySelector(".home-container");

if(homeContainer){

    const greeting = document.createElement("h3");

    const hour = new Date().getHours();

    let message = "";

    if(hour < 12){
        message = "🌅 Good Morning!";
    }
    else if(hour < 18){
        message = "☀️ Good Afternoon!";
    }
    else{
        message = "🌙 Good Evening!";
    }

    greeting.innerHTML = message;

    greeting.style.color = "#38bdf8";
    greeting.style.marginBottom = "20px";

    homeContainer.prepend(greeting);
}


/* Scroll To Top Button */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#38bdf8";
topButton.style.color = "white";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if(window.scrollY > 200){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* Card Hover Glow */

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 25px rgba(56,189,248,0.4)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";
    });

});


/* Profile Avatar Rotation */

const avatar = document.querySelector(".profile-avatar");

if(avatar){

    avatar.addEventListener("mouseenter", () => {

        avatar.style.transform = "rotate(360deg)";
        avatar.style.transition = "1s";
    });

}