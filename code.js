let screen = document.querySelector(".screen")
const btnNumber = document.querySelectorAll(".number")

let data = ""
console.log(typeof data)

btnNumber.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.id)
        data = parseInt(data + element.id)
        screen.textContent = data
        // console.log(typeof data)

    })
});

//operate
const operate = function (operator, a, b) {
    operator(a, b)

}

//add
const add = function (a, b) {
    console.log("add")
    console.log("delete")


}

//subtract
const subtract = function (a, b) {
    console.log("substract")
    console.log("delete")


}

//multiply
const multiply = function (a, b) {
    console.log("multiply")


}

//divide
const divide = function (a, b) {
    console.log("divide")


}
