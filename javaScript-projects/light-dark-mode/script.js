const parentContainer = document.querySelector(".parent-container");
const changeThemeBtn = document.querySelector(".change-theme");
const tagName = document.querySelector("h1");


// let flag = 0

// changeThemeBtn.addEventListener("click", ()=>{
//     flag = !flag
//     tagName.innerHTML = flag ? "Switch to Light Mode" : "Switch to Dark Mode"
//     tagName.style.color = flag ? "white" : "black"
//     parentContainer.style.backgroundColor = flag ? "black" : "white"
//     changeThemeBtn.style.backgroundColor = flag? "white" : "black"
//     changeThemeBtn.style.color = flag ? "black" : "white"
// });

let isDark = false;
changeThemeBtn.addEventListener("click", ()=>{
    isDark = !isDark

    // Update heading text
    tagName.innerHTML = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

    // Toggle the classes
    parentContainer.className = `parent-container ${isDark ? "dark-mode" : "light-mode"}`
    changeThemeBtn.className = `change-theme ${isDark ? "dark" : "light"}`
});
