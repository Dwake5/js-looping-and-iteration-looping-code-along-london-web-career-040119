// Code your solutions in this file
function writeCards(arr, message) {
    let newArr = []
    for(let ele of arr) {
        newArr.push( `Thank you, ${ele}, for the wonderful ${message} gift!`)
    }
    return newArr
}

function countdown(numb) {
    while (numb >= 0) {
        console.log(numb)
    numb--
    }
}