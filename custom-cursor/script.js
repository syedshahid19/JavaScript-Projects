const container = document.querySelector("#container");
const customCursor = document.querySelector(".cursor");


container.addEventListener("mousemove", (events)=>{
    console.log(events);
    customCursor.style.top = events.y + "px";
    customCursor.style.left = events.x + "px";
});