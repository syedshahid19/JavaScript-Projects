let arr = [
    {
        dp:"https://images.unsplash.com/photo-1590013330451-3946e83e0392?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzMwNDUyfHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1590013330451-3946e83e0392?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzMwNDUyfHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1590081369518-fc3b01f958c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMzMwNDUyfHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1590081369518-fc3b01f958c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMzMwNDUyfHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1549382447-4dc80109a727?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMzMwNDUyfHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1549382447-4dc80109a727?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMzMwNDUyfHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1551986781-2f5b76ad4a88?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzMzMwNDUyfHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1551986781-2f5b76ad4a88?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzMzMwNDUyfHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1535068484622-7a077e5aa558?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MzMzMDQ1Mnx8ZW58MHx8fHx8",
        story:"https://images.unsplash.com/photo-1535068484622-7a077e5aa558?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MzMzMDQ1Mnx8ZW58MHx8fHx8"
    },
]

const stories = document.querySelector("#stories");
const fullScreen = document.querySelector("#full-screen");

// let clutter = ""
// arr.forEach((element, index)=>{
//     clutter += 
//     `
//         <div class="story">
//             <img id="${index}" src="${element.dp}" alt="">   
//         </div>
//     `
// })

// stories.innerHTML = clutter

// const clutter = arr.map((ele, i)=>{
//     return `
//         <div class="story">
//             <img src=${ele.dp} id=${i} >
//         </div>
//     `;
// }).join("");

arr.forEach((element, index)=>{
    const div = document.createElement("div");
    div.classList.add("story");
    const img = document.createElement("img");
    img.src = element.dp;
    img.id = index;
    div.appendChild(img);
    stories.appendChild(div);
})

stories.addEventListener("click", (events)=>{
   let value = arr[events.target.id].story
   fullScreen.style.display = "block";
   fullScreen.style.backgroundImage = `url(${value})`;

   setTimeout(() => {
    fullScreen.style.display = "none"
   }, 2000);
})



//     return `
//         <div class="story">
//             <img src=${ele.dp} id=${i} >
//         </div>
//     `;
// }).join("");



