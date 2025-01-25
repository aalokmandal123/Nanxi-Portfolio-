// Initialize AOS (Animate On Scroll)
AOS.init({
    offset: 100, // offset for scrolling
    duration: 1000, // duration of the animation
    easing: 'ease-in-out', // easing function for the animation
    delay: 0, // delay between animations
});

// Hamburger menu functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect for typing "Developer", "Designer", "Youtuber"
let typewriterSpan = document.querySelector('.typewriter span');
let textArr = ["Developer", "Designer", "Youtuber"];
let textIndex = 0;
let letterIndex = 0;

function typeWriter() {
    if (letterIndex < textArr[textIndex].length) {
        typewriterSpan.textContent += textArr[textIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWriter, 150);
    } else {
        setTimeout(() => {
            letterIndex = 0;
            textIndex = (textIndex + 1) % textArr.length;
            typewriterSpan.textContent = '';
            typeWriter();
        }, 2000); // Pause before switching words
    }
}
typeWriter(); // Start typing effect
