const operator = document.getElementById("operator")
const result = document.getElementById("result")
const reset = document.querySelector(".reset")
const deletes = document.querySelector(".delete")


let sum = "";

function addValue (value) {
    result.value += value
    sum += value
}

reset.addEventListener("click",function(){
    result.value = " ";
    operator.value= " "; 
    sum = " ";
}) 
    
function finalResult () {
    operator.value = result.value + " ="
    result.value = eval(sum)
    sum = result.value
}

deletes.addEventListener("click", function () {
    result.value = result.value.slice(0, -1);
    sum = sum.slice(0,-1);
})

function kali () {
    result.value += "x"
    sum += '*'
}



