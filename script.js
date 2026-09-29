/* =====================================================
   YASEEN BASHA PORTFOLIO - JAVASCRIPT

   JavaScript is intentionally small.
   We only use it for the dark/light mode toggle.

   Most of the website is made with HTML + CSS.
   ===================================================== */


/* Find the checkbox from our HTML */
const themeToggle = document.getElementById("themeToggle");


/* When the user clicks the switch... */
themeToggle.addEventListener("change", function () {

    /* Add/remove the light-mode class on <body> */
    document.body.classList.toggle("light-mode");

    /* Save the user's choice in the browser */
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});


/* Check whether the user previously selected light mode */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.checked = true;
}
