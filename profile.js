let favColor = document.querySelector("#color")
let favPlace = document.querySelector("#place")
let favRitual = document.querySelector("#ritual")

let favBtnAlert = (event) => {
    console.log (event.target.id)
    if (event.target.id === 'color') {
        alert('My favorite color is green')
    } else if (event.target.id === 'place') {
        alert('My favorite place is my room')
    } else (
        alert('My favorite ritural is my night time walks around the block')
    )
}

favColor.addEventListener('click', favBtnAlert)
favPlace.addEventListener('click', favBtnAlert)
favRitual.addEventListener('click', favBtnAlert)
