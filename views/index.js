
document.querySelector("#one-room-app").addEventListener("click", ()=> {
    window.location.href = '../pages/apartmentOne.html'
})

document.querySelector("#two-room-app").addEventListener("click", ()=> {
    window.location.href = '../pages/apartmentTwo.html'
})

document.querySelector("#three-room-app").addEventListener("click", ()=> {
    window.location.href = '../pages/apartmentThree.html'
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})