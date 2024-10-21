let tent = 5
let n = 0

function getRandom(min = 0, max = 100) {
    n = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(n)
    return n;
}

function callback(event) {
    let number = document.querySelector("[name=guess]")
    let colpo = number.value

    while(colpo === null || isNaN(colpo)) {
        colpo = prompt("Idovina il numero!!!")
    }
    tent++
    colpo = parseInt(colpo)

    if(colpo == n) {
        console.log("CONGRATURAZIONI! Hai vinto.")
        tent = 0
        msg.innerHTML = "WINNER"
        alert("CONGRATURAZIONI! Hai vinto.")
    } else if(colpo < n) {
        console.log("Troppo piccolo. Tentativi rimasti: " + (5 - tent) + " | " + colpo)
        msg.innerHTML = "Troppo piccolo. <br>Tentativi a disposizione: " + tent
    } else {
        console.log("Troppo grande.  Tentativi rimasti: " + (5 - tent) + " | " + colpo)
        msg.innerHTML = "Troppo grande. <br>Tentativi a disposizione: " + tent
    }
}

getRandom(0, 100)

let msg = document.querySelector("#message")
let button = document.querySelector("[type=button]")
while(tent != 0) { 
    button.addEventListener("click", callback)
    tent = tent - 1
}
