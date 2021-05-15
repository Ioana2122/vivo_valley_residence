
globalVariables = {}

//display apartments
let displayModels = (array, element) => {
    array.forEach(apartment => {
        element.innerHTML +=`
            <div class="col avivo-ap-model--item" data-bs-toggle="modal" data-bs-target="#avivo-ap-modal-one">
                <div class="card-body ">
                    <h5 class="card-title">
                        <small class="avivo-ap-model--title">apartament</small>
                        <span class="avivo-ap-counter">${apartment.apartmentNumber}</span>
                    </h5>
                    <picture  class="img-thumbnail avivo-ap-picture">
                        <source media="(min-width:650px)" srcset="${apartment.imageUrl}">
                        <source media="(min-width:465px)" srcset="${apartment.imageUrl}">
                        <img src="${apartment.imageUrl}" alt="Apartament ${apartment.apartmentNumber}" class="shadow-lg">
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
            let imageSource = item.querySelector('.avivo-ap-picture > img').getAttribute('src');
            let altText =  item.querySelector('.avivo-ap-picture > img').getAttribute('alt');
            document.querySelector('.carousel-item > img').setAttribute("src", imageSource);
            document.querySelector('.carousel-item > img').setAttribute("alt", altText);
            document.querySelector('.modal-ap-counter').innerText = document.querySelectorAll('.avivo-ap-counter')[index].innerText;
        })
    })
}


