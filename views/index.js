
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

// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })

//Make contact button sticky at scroll when it passes header
window.addEventListener('scroll', () => {
    let distanceFromTop = $(window).scrollTop();
    let headerHeight = $(".avivo-header").outerHeight();
    const contactBtn = document.querySelector(".avivo-header-contact");
    if (distanceFromTop > headerHeight) {
        contactBtn.classList.add("add-sticky");
    }
    if (distanceFromTop < headerHeight) {
        contactBtn.classList.remove("add-sticky");
    }
})

// var myCarousel = document.querySelector('#carouselExampleIndicators');
// var carousel = new bootstrap.Carousel(myCarousel);
//
// carousel();