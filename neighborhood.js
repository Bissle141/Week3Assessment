let recBtn = document.querySelector("#resturantBtn")
let res1 = document.querySelector('#thaiVil')
let res2 = document.querySelector('#underWraps')
let res3 = document.querySelector('#zupas')
let res4 = document.querySelector('#cafeRio')

let resList = [res1, res2, res3, res4]

const randomResRec = ( ) => {
    console.log(resList)

    let randomRes = resList[Math.floor(Math.random() * resList.length)]
    alert(`You should go to ${randomRes.childNodes[1].textContent}`)
}

// const randomElement = array[Math.floor(Math.random() * array.length)];


recBtn.addEventListener('click', randomResRec)