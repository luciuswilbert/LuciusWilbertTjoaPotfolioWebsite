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