let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I Was Very cagy")
    document.querySelector(".box").innerHTML = "<b>Hello World How are you</b>"
})

button.addEventListener("contextmenu", ()=>{
    alert("dont right click please")
})

document.button.addEventListener("keydown", (e)=>{
    console.log(e)
})
