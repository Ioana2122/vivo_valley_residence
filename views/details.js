const apartments2Rooms = [
    {
        apartmentNumber: "3",
        imageUrl: "/2rooms/ap3.jpg",
        sold: false
    },
    {
        apartmentNumber: "4",
        imageUrl: "/2rooms/ap4.jpg",
        sold: false
    },
    {
        apartmentNumber: "5",
        imageUrl: "/2rooms/ap5.jpg",
        sold: false
    },
    {
        apartmentNumber: "6",
        imageUrl: "/2rooms/ap6.jpg",
        sold: false
    },
    {
        apartmentNumber: "10",
        imageUrl: "/2rooms/ap10.jpg",
        sold: false
    },
    {
        apartmentNumber: "11",
        imageUrl: "/2rooms/ap11.jpg",
        sold: false
    },
    {
        apartmentNumber: "15",
        imageUrl: "/2rooms/ap15.jpg",
        sold: false
    },
    {
        apartmentNumber: "16",
        imageUrl: "/2rooms/ap16.jpg",
        sold: false
    },
    {
        apartmentNumber: "20",
        imageUrl: "/2rooms/ap20.jpg",
        sold: false
    },
    {
        apartmentNumber: "21",
        imageUrl: "/2rooms/ap21.jpg",
        sold: false
    }
];

const apartments3Rooms = [
    {
        apartmentNumber: "2",
        imageUrl: "/3rooms/ap2.jpg",
        sold: false
    },
    {
        apartmentNumber: "7",
        imageUrl: "/3rooms/ap7.jpg",
        sold: false
    },
    {
        apartmentNumber: "8",
        imageUrl: "/3rooms/ap8.jpg",
        sold: false
    },
    {
        apartmentNumber: "9",
        imageUrl: "/3rooms/ap12.jpg",
        sold: false
    },
    {
        apartmentNumber: "12",
        imageUrl: "/3rooms/ap12.jpg",
        sold: false
    },
    {
        apartmentNumber: "13",
        imageUrl: "/3rooms/ap13.jpg",
        sold: false
    },
    {
        apartmentNumber: "14",
        imageUrl: "/3rooms/ap14.jpg",
        sold: false
    },
    {
        apartmentNumber: "17",
        imageUrl: "/3rooms/ap17.jpg",
        sold: false
    },
    {
        apartmentNumber: "18",
        imageUrl: "/3rooms/ap18.jpg",
        sold: false
    },
    {
        apartmentNumber: "19",
        imageUrl: "/3rooms/ap19.jpg",
        sold: false
    },
    {
        apartmentNumber: "22",
        imageUrl: "/3rooms/ap22.jpg",
        sold: false
    },
    {
        apartmentNumber: "23",
        imageUrl: "/3rooms/ap23.jpg",
        sold: false
    }
];

const apartments4Rooms = [
    {
        apartmentNumber: "24",
        imageUrl: "/4rooms/ap24.jpg",
        sold: false
    },
    {
        apartmentNumber: "25",
        imageUrl: "/4rooms/ap25.jpg",
        sold: false
    }
];


//display apartments
let displayModels = (array, element) => {
    array.forEach((apartment, index) => {
        element.innerHTML +=`
            <div class="col vivo-ap-model--item desktop-vivo-ap-model--item" data-bs-toggle="modal" data-bs-target="#vivo-ap-modal-one">
                <div class="card-body ">
                    <h5 class="card-title">
                        <small class="vivo-ap-model--title">apartament</small>
                        <span class="vivo-ap-counter">${apartment.apartmentNumber}</span>
                        <small class="vivo-ap-status d-none">Vândut</small>
                    </h5>
                    <picture  class="vivo-ap-picture">
                        <source media="(min-width:650px)" srcset="${apartment.imageUrl}">
                        <source media="(min-width:465px)" srcset="${apartment.imageUrl}">
                        <img src="${apartment.imageUrl}" alt="Apartament ${apartment.apartmentNumber}" class="shadow-lg lazyload">
                    </picture>
                </div>
            </div> 
        `
        if(apartment.sold === true) {
            document.querySelectorAll('.vivo-ap-status')[index].classList.remove('d-none')
        }
    });
}

//display modal details
const displayModalDetails = (array) => {
    array.forEach((item, index) => {
        item.addEventListener('click', () => {
            let imageSource = item.querySelector('.vivo-ap-picture > img').getAttribute('src');
            let altText =  item.querySelector('.vivo-ap-picture > img').getAttribute('alt');
            document.querySelector('.carousel-item > img').setAttribute("src", imageSource);
            document.querySelector('.carousel-item > img').setAttribute("alt", altText);
            document.querySelector('.modal-ap-counter').innerText = document.querySelectorAll('.vivo-ap-counter')[index].innerText;
        })
    })
}

//display mobile items without modal
let displayModelsMobile = (array, element) => {
    array.forEach((apartment, index) => {
        element.innerHTML +=`
            <div class="col vivo-ap-model--item mobile-vivo-ap-model--item w-100">
                <div class="card-body ">
                    <h5 class="card-title">
                        <small class="vivo-ap-model--title">apartament</small>
                        <span class="vivo-ap-counter">${apartment.apartmentNumber}</span>
                        <small class="vivo-ap-status d-none">Vândut</small>
                    </h5>
                    <picture  class="vivo-ap-picture">
                        <source media="(min-width:650px)" srcset="${apartment.imageUrl}">
                        <source media="(min-width:465px)" srcset="${apartment.imageUrl}">
                        <img src="${apartment.imageUrl}" alt="Apartament ${apartment.apartmentNumber}" class="shadow-lg lazyload">
                    </picture>
                </div>
            </div> 
        `
        if(apartment.sold === true) {
           document.querySelectorAll('.vivo-ap-status')[index].classList.remove('d-none')
       }
    });
}


const handleGoUpArrow = () => {
    document.querySelector('.go-up-btn-arrow').addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
}


window.onload = () => {
    init ();
}

const init = () => {
    let apartmentModel  = document.querySelector('.vivo-ap-model');
    const removeDesktopElements = () => {
        document.querySelectorAll('.desktop-vivo-ap-model--item').forEach(elem => {
            elem.remove()
        })
    }

    const removeMobileElements = () => {
        document.querySelectorAll('.mobile-vivo-ap-model--item').forEach(elem => {
            elem.remove()
        })
    }

    if(sessionStorage.getItem('pageId') === 'apartments-two-rooms') {
        if (window.screen.width <= 768) {
            removeDesktopElements();
            displayModelsMobile(apartments2Rooms,apartmentModel);
        } else {
            removeMobileElements();
            displayModels(apartments2Rooms,apartmentModel);
            displayModalDetails(document.querySelectorAll('.desktop-vivo-ap-model--item'));
            handleGoUpArrow();
        }
    }
    if(sessionStorage.getItem('pageId') === 'apartments-three-rooms') {

        if (window.screen.width <= 768) {
            removeDesktopElements();
            displayModelsMobile(apartments3Rooms, apartmentModel);
        } else {
            removeMobileElements();
            displayModels(apartments3Rooms, apartmentModel);
            displayModalDetails(document.querySelectorAll('.desktop-vivo-ap-model--item'));
            handleGoUpArrow();
        }
    }
    if(sessionStorage.getItem('pageId') === 'apartments-four-rooms') {

        if (window.screen.width <= 768) {
            removeDesktopElements();
            displayModelsMobile(apartments4Rooms,apartmentModel);
        } else {
            removeMobileElements();
            displayModels(apartments4Rooms,apartmentModel);
            displayModalDetails(document.querySelectorAll('.desktop-vivo-ap-model--item'));
            handleGoUpArrow();
        }
    }
}

window.addEventListener('resize', () => {
    if (window.screen.width <= 768 && !document.querySelectorAll('.mobile-vivo-ap-model--item').length ||
        window.screen.width > 768 && !document.querySelectorAll('.desktop-vivo-ap-model--item').length)
        {
            init();
        }
})

