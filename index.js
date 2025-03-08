let inputValue = document.getElementById("inputbox")

let btns = document.getElementsByTagName("button")

let buttons = Array.from(btns)

let value=""

buttons.forEach(btn=>{
    btn.addEventListener("click", (button)=>{

        if(button.target.innerText !== "=" && button.target.innerText !== "C" )
        {
            if(value === "" && (button.target.innerText === "." || button.target.innerText === "+" || button.target.innerText === "-" || button.target.innerText === "*" || button.target.innerText === "/")){}
            else if((value.endsWith("+") || value.endsWith("-") || value.endsWith("/") || value.endsWith(".") || value.endsWith("*")) && (button.target.innerText === "." || button.target.innerText === "+" || button.target.innerText === "-" || button.target.innerText === "*" || button.target.innerText === "/")){}
            else{
                value +=button.target.innerText
                inputValue.value = value
            }
        }
        else{
            if(button.target.innerText === "=" && value){
                    if(value.endsWith("+") || value.endsWith("-") || value.endsWith("/") || value.endsWith(".") || value.endsWith("*")){}
                    else{
                        inputValue.value = eval(value)
                        value= inputValue.value;
                    }
                
            }else{
                inputValue.value=""
                value=""
            }
        }
    })
})

