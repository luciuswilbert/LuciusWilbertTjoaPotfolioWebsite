/* typing animation */
var typedHome = new Typed(".typing-home", {
    strings:["Fullstack Developer", "Web Developer", "Mobile App Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

var typedAbout = new Typed(".typing-about", {
    strings:["Fullstack Developer", "Web Developer", "Mobile App Engineer"],
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
