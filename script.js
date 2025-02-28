document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const header = document.querySelector("header");

    // Mobil nézet összecsukható szekciók
    sections.forEach((section) => {
        const headerTitle = section.querySelector("h2");
        const content = Array.from(section.children).filter(child => child !== headerTitle);

        headerTitle.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                content.forEach(el => {
                    el.style.display = el.style.display === "none" ? "block" : "none";
                });
            }
        });
    });

    function toggleMobileView() {
        if (window.innerWidth <= 768) {
            sections.forEach(section => {
                const content = Array.from(section.children).filter(child => child !== section.querySelector("h2"));
                content.forEach(el => el.style.display = "none");
            });
        } else {
            sections.forEach(section => {
                const content = Array.from(section.children).filter(child => child !== section.querySelector("h2"));
                content.forEach(el => el.style.display = "block");
            });
        }
    }

    toggleMobileView();
    window.addEventListener("resize", toggleMobileView);

    // Hover effekt a header és section elemekre
    const expandableElements = [header, ...sections];

    expandableElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("expanded");
        });

        element.addEventListener("mouseleave", () => {
            element.classList.remove("expanded");
        });
    });
});