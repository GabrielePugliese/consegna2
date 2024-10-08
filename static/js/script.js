let tent = 0
let num = 0

function numRandom(min = 0,  max = 100){
    let num = Math.random()
    num = num * (max - min) + min
    return Math.floor(num)
}
let computer = numRandom(0, 100)

while (tent < 5) {
    let indovin = prompt("Indovina il numero!")
    while (indovin === null || isNaN(indovin)) {
        indovin = prompt("Indovina il numero!")
    }
    tent++
    indovin = parseInt(indovin)

    if (indovin == num) {
        console.log("Hai vinto!")
        tent = 5
    } else if (indovin < num) {
        console.log("Numero digitato: " + indovin, "/ Numero minore a quello nascosto. Tentativi rimasti: " + (5 - tent))
    } else {
        console.log("Numero digitato: " + indovin, "/ Numero maggiore a quello nascosto. Tentativi rimasti: " + (5 - tent))
    }
}
alert("Hai perso! Il numero nascosto era:  " + num)

let btn = document.querySelector("#guessBtn")

function handleClick(event){
    console.log(event)
}  
btn.addEventListener("click", handleClick)


