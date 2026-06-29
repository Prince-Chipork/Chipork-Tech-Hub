const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

const dropBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

if (dropBtn && dropdownContent) {

    dropBtn.addEventListener("click", (e) => {

        // Prevent the click from affecting other elements
        e.preventDefault();

        // Only use click-to-open on mobile
        if (window.innerWidth <= 768) {

            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }

        }

    });

}
