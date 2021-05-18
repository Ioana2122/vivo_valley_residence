const apartments2Rooms = [
    {
        apartmentNumber: "3",
        imageUrl: "../assets/2rooms/ap3.jpg"
    },
    {
        apartmentNumber: "4",
        imageUrl: "../assets/2rooms/ap4.jpg"
    },
    {
        apartmentNumber: "5",
        imageUrl: "../assets/2rooms/ap5.jpg"
    },
    {
        apartmentNumber: "6",
        imageUrl: "../assets/2rooms/ap6.jpg"
    },
    {
        apartmentNumber: "10",
        imageUrl: "../assets/2rooms/ap10.jpg"
    },
    {
        apartmentNumber: "11",
        imageUrl: "../assets/2rooms/ap11.jpg"
    },
    {
        apartmentNumber: "15",
        imageUrl: "../assets/2rooms/ap15.jpg"
    },
    {
        apartmentNumber: "16",
        imageUrl: "../assets/2rooms/ap16.jpg"
    },
    {
        apartmentNumber: "20",
        imageUrl: "../assets/2rooms/ap20.jpg"
    },
    {
        apartmentNumber: "21",
        imageUrl: "../assets/2rooms/ap21.jpg"
    }
];

const apartments3Rooms = [
    {
        apartmentNumber: "2",
        imageUrl: "../assets/3rooms/ap2.jpg"
    },
    {
        apartmentNumber: "7",
        imageUrl: "../assets/3rooms/ap7.jpg"
    },
    {
        apartmentNumber: "8",
        imageUrl: "../assets/3rooms/ap8.jpg"
    },
    {
        apartmentNumber: "9",
        imageUrl: "../assets/3rooms/ap12.jpg"
    },
    {
        apartmentNumber: "12",
        imageUrl: "../assets/3rooms/ap12.jpg"
    },
    {
        apartmentNumber: "13",
        imageUrl: "../assets/3rooms/ap13.jpg"
    },
    {
        apartmentNumber: "14",
        imageUrl: "../assets/3rooms/ap14.jpg"
    },
    {
        apartmentNumber: "17",
        imageUrl: "../assets/3rooms/ap17.jpg"
    },
    {
        apartmentNumber: "18",
        imageUrl: "../assets/3rooms/ap18.jpg"
    },
    {
        apartmentNumber: "19",
        imageUrl: "../assets/3rooms/ap19.jpg"
    },
    {
        apartmentNumber: "22",
        imageUrl: "../assets/3rooms/ap22.jpg"
    },
    {
        apartmentNumber: "23",
        imageUrl: "../assets/3rooms/ap23.jpg"
    }
];

const apartments4Rooms = [
    {
        apartmentNumber: "24",
        imageUrl: "../assets/4rooms/ap24.jpg"
    },
    {
        apartmentNumber: "25",
        imageUrl: "../assets/4rooms/ap25.jpg"
    }
];


//display apartments
let displayModels = (array, element) => {
    array.forEach(apartment => {
        element.innerHTML +=`
            <div class="col vivo-ap-model--item" data-bs-toggle="modal" data-bs-target="#vivo-ap-modal-one">
                <div class="card-body ">
                    <h5 class="card-title">
                        <small class="vivo-ap-model--title">apartament</small>
                        <span class="vivo-ap-counter">${apartment.apartmentNumber}</span>
                    </h5>
                    <picture  class="img-thumbnail vivo-ap-picture">
                        <source media="(min-width:650px)" srcset="${apartment.imageUrl}">
                        <source media="(min-width:465px)" srcset="${apartment.imageUrl}">
                        <img src="${apartment.imageUrl}" alt="Apartament ${apartment.apartmentNumber}" class="shadow-lg lazyload">
                    </picture>
                </div>
            </div> 
        `
    });
}

//display modal details
const displayModalDetails = (array) => {
    array.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(item);
            let imageSource = item.querySelector('.vivo-ap-picture > img').getAttribute('src');
            let altText =  item.querySelector('.vivo-ap-picture > img').getAttribute('alt');
            document.querySelector('.carousel-item > img').setAttribute("src", imageSource);
            document.querySelector('.carousel-item > img').setAttribute("alt", altText);
            document.querySelector('.modal-ap-counter').innerText = document.querySelectorAll('.vivo-ap-counter')[index].innerText;
        })
    })
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

let apartmentModel  = document.querySelector('.vivo-ap-model');

if(sessionStorage.getItem('pageId') === 'apartments-two-rooms') {
    displayModels(apartments2Rooms,apartmentModel);
}

if(sessionStorage.getItem('pageId') === 'apartments-three-rooms') {
    displayModels(apartments3Rooms,apartmentModel);
}

if(sessionStorage.getItem('pageId') === 'apartments-four-rooms') {
    displayModels(apartments4Rooms,apartmentModel);
}

displayModalDetails(document.querySelectorAll('.vivo-ap-model--item'));
handleGoUpArrow();
