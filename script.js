/* typing animation */
var typedHome = new Typed(".typing-home", {
    strings:["AI Engineer", "AI Developer", "AI Researcher"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

var typedAbout = new Typed(".typing-about", {
    strings:["AI Engineer", "AI Developer", "AI Researcher"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function scrollToContact(subject) {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Auto-select the subject
    const subjectField = document.getElementById('subject');
    subjectField.value = subject;
}




let devmatchImages = [
    "images/devmatch1.jpg",
    "images/devmatch2.jpg",
];
let devmatchIndex = 0;
let devmatchInterval;

function startDevMatchSlider() {
    const img = document.getElementById("devmatch-img");
    devmatchInterval = setInterval(() => {
        devmatchIndex = (devmatchIndex + 1) % devmatchImages.length;
        img.src = devmatchImages[devmatchIndex];
    }, 1000);
}

function stopDevMatchSlider() {
    clearInterval(devmatchInterval);
}

let jogetImages = [
    "images/joget1.jpg",
    "images/joget2.jpg"
];
let jogetIndex = 0;
let jogetInterval;

function startJogetSlider() {
    const img = document.getElementById("joget-img");
    jogetInterval = setInterval(() => {
        jogetIndex = (jogetIndex + 1) % jogetImages.length;
        img.src = jogetImages[jogetIndex];
    }, 1000);
}

function stopJogetSlider() {
    clearInterval(jogetInterval);
}

let kitahackImages = [
    "images/KitaHack/IMG_9000.JPG",
    "images/KitaHack/IMG_8634.JPG",
    "images/KitaHack/WhatsApp Image 2025-05-08 at 13.31.16.jpeg",
    "images/KitaHack/WhatsApp Image 2025-05-08 at 13.31.20.jpeg",
    "images/KitaHack/WhatsApp Image 2025-05-08 at 13.31.14.jpeg"
];
let kitahackIndex = 0;
let kitahackInterval;

function startKitaHackSlider() {
    const img = document.getElementById("kitahack-img");
    kitahackInterval = setInterval(() => {
        kitahackIndex = (kitahackIndex + 1) % kitahackImages.length;
        img.src = kitahackImages[kitahackIndex];
    }, 1000);
}

function stopKitaHackSlider() {
    clearInterval(kitahackInterval);
}
