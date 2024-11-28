const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click" , () =>{
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        }
        else if (btn.id === "del"){
            display.value = display.value.slice (0, -1);
        }else{
            display.value += btn.id

            
        }
            
        
    } )
})



const body = document.querySelector("body");
function alterarmodo(){
    var elemento = document.body;
    elemento.classList.toggle("light");
}






