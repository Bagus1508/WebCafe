function toggleNav() {
    let sidebar = document.getElementById("sidebar");
    let currentWidth = sidebar.style.width;

    if (currentWidth === "250px") {
        //Sidebar tertutup
        sidebar.style.width = "0";
    } else {
        //Sidebar Terbuka
        sidebar.style.width = "250px";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarContainer');

    function handleScroll() {
        if (window.scrollY > 70) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    document.addEventListener('scroll', handleScroll);
})