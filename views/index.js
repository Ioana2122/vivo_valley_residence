const handleEventListeners = {
    handlePagesRedirect: function () {
        document.querySelector("#one-room-app").addEventListener("click", () => {
            window.location.href = '/apartments-two-rooms.html'
            sessionStorage.setItem('pageId', 'apartments-two-rooms')
        });
        document.querySelector("#two-room-app").addEventListener("click", () => {
            window.location.href = '/apartments-three-rooms.html'
            sessionStorage.setItem('pageId', 'apartments-three-rooms')

        });
        document.querySelector("#three-room-app").addEventListener("click", () => {
            window.location.href = '/apartments-four-rooms.html'
            sessionStorage.setItem('pageId', 'apartments-four-rooms')
        });
    }
}

const handleNavigation = {
    handleLinks: function ()  {
        let navLinks = document.querySelectorAll('.nav-item')

        navLinks[1].addEventListener("click", () => {
            sessionStorage.setItem('pageId', 'apartments-two-rooms')
        });

        navLinks[2].addEventListener("click", () => {
            sessionStorage.setItem('pageId', 'apartments-three-rooms')
        });

        navLinks[3].addEventListener("click", () => {
            sessionStorage.setItem('pageId', 'apartments-four-rooms')
        });
    },

    //toggle collapsed container
    handleCollapsableNav: function () {
        document.querySelector('.navbar-toggler').addEventListener("click", () => {
            let collapsedNav = document.querySelector('.collapse');
            if(collapsedNav.classList.contains('show')) {
                collapsedNav.classList.remove('show');
            } else {
                collapsedNav.classList.add('show');
            }
        })
    }
};

if(document.querySelector('.vivo-cards')) {
    handleEventListeners.handlePagesRedirect();
}

handleNavigation.handleLinks();
handleNavigation.handleCollapsableNav();
