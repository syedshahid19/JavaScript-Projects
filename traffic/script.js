const lights = ["red", "yellow", "green", "yellow"];
const duration = [4000, 2000, 1000, 1000]

let index = 0;

function changeLight(){
    document.querySelector(".color").innerHTML = lights[index];
    setTimeout(()=>{
        index = (index+1)%lights.length;
        changeLight();
    }, duration[index])
}

changeLight();