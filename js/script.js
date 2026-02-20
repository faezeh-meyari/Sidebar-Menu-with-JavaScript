const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelectorAll(".sidebar-toggle");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector('.theme-icon');
const searchForm = document.querySelector('.search-form');
const menuItems = document.querySelectorAll(".menu-link");
const mainContent = document.querySelector('.main-content');

const updateThemeIcon = () => {
    const isDark = document.body.classList.contains("dark-theme");
    themeIcon.textContent = sidebar.classList.contains("collapsed") ?
        (isDark ? "light_mode" : "dark_mode") : "dark_mode";
}

// Apply dark theme if saved or system prefers
const saveTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = saveTheme === "dark" || (!saveTheme && systemPrefersDark);

document.body.classList.toggle("dark-theme" , shouldUseDarkTheme);
updateThemeIcon();

//Toggle sidebar collapsed state on buttons click

/*sidebarToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateThemeIcon();
});*/
sidebarToggleBtn.forEach(btn => {
    btn.addEventListener("click" , () =>{
        sidebar.classList.toggle("collapsed");
        updateThemeIcon();
    })
})

//Expand the sidebar when the search form is clicked
searchForm.addEventListener("click", (e) => {
    if(sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        searchForm.querySelector("input").focus();
    }
})

//Toggle between themes on theme button click
themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon()
});
if(window.innerWidth > 768){
    sidebar.classList.remove("collapsed");

}

//Active clicked link
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click" ,function(e) {
        e.preventDefault(); // Prevent from refreshing the link

        menuItems.forEach( link => {
            link.classList.remove("active");
        });
        this.classList.add("active");
    });
});


