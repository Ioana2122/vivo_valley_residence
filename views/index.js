
document.querySelector("#one-room-app").addEventListener("click", ()=> {
    window.location.href = '../pages/apartments-two-rooms.html'
    sessionStorage.setItem('pageId', 'apartments-two-rooms')
})
document.querySelector("#two-room-app").addEventListener("click", ()=> {
    window.location.href = '../pages/apartments-three-rooms.html'
    sessionStorage.setItem('pageId', 'apartments-three-rooms')

})

document.querySelector("#three-room-app").addEventListener("click", ()=> {
    window.location.href = '../pages/apartments-four-rooms.html'
    sessionStorage.setItem('pageId', 'apartments-four-rooms')
})

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