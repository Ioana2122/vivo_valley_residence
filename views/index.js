
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

//toggle collapsed container
document.querySelector('.navbar-toggler').addEventListener("click", () => {
    let collapsedNav = document.querySelector('.collapse');
    if(collapsedNav.classList.contains('show')) {
        collapsedNav.classList.remove('show');
    } else {
        collapsedNav.classList.add('show');
    }
})
