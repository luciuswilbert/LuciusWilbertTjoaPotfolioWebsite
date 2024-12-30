document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Get all sections
    const navLinks = document.querySelectorAll(".aside .nav li a"); // Get all nav links

    window.addEventListener("scroll", () => {
        let current = "";

        // Find the current section in view
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        // Add the 'active' class to the corresponding nav link
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});