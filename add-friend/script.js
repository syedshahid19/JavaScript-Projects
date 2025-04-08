const friendRequestBtn = document.querySelector("#friend-request");
const displayText = document.querySelector("#reqDisplayText");

let flag = false

friendRequestBtn.addEventListener("click", ()=>{

    flag = !flag
    console.log(flag);
    displayText.innerHTML = flag ? "Friends" : "Stranger";
    displayText.style.color = flag? "green":"red";
    friendRequestBtn.innerHTML = flag? "Remove Friend" : "Add Friend"

});

// friendRequestBtn.addEventListener("click", function(){
//     if(flag == 0){
//         displayText.innerHTML = "Friends";
//         displayText.style.color = "green";
//         friendRequestBtn.innerHTML = "Remove Friend"
//         flag=1;
//     }else{
//         displayText.innerHTML = "Stranger";
//         displayText.style.color = "red";
//         friendRequestBtn.innerHTML = "Add Friend"
//         flag=0
//     }
// })
