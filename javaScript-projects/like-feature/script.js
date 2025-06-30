const container = document.querySelector("#container");
const icon = document.querySelector("i");
const image = document.querySelector("img");

image.addEventListener("mouseenter", ()=>{
    container.style.transform = "scale(1.2)"
});

image.addEventListener("mouseleave", ()=>{
    container.style.transform = "scale(1)"
});


container.addEventListener("dblclick", ()=>{
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    icon.style.opacity = 0.8;

    setTimeout(() => {
        icon.style.transform = "translate(-50%, -50%) scale(0)"
    }, 1000);
})

