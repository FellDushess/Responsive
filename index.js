const navToggle = document.querySelector(".NavToggle");
const navMenu = document.querySelector(".NavMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("NavMenu-visible");

    if (navMenu.classList.contains("NavMenu-visible")){
        navToggle.setAttribute("arial-label", "Cerrar Menu");
    }else{
        navToggle.setAttribute("arial-label", "Abrir Menu");
    }
});