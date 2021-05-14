    const apartments = [
        {
        title: "Model 1",
         imageUrl: "../assets/2rooms/ap3.jpg"
        },
        {
        title: "Model 2",
        imageUrl: "../assets/2rooms/ap4.jpg"
        },
        {
            title: "Model 3",
            imageUrl: "../assets/2rooms/ap5.jpg"
        },
        {
            title: "Model 4",
            imageUrl: "../assets/2rooms/ap6.jpg"
        },
        {
            title: "Model 5",
            imageUrl: "../assets/2rooms/ap10.jpg"
        },
        {
            title: "Model 6",
            imageUrl: "../assets/2rooms/ap11.jpg"
        },
        {
            title: "Model 7",
            imageUrl: "../assets/2rooms/ap15.jpg"
        },
        {
            title: "Model 8",
            imageUrl: "../assets/2rooms/ap16.jpg"
        },
        {
            title: "Model 9",
            imageUrl: "../assets/2rooms/ap20.jpg"
        },
        {
            title: "Model 10",
            imageUrl: "../assets/2rooms/ap21.jpg"
        }
    ];

    apartments.forEach(apartment => {
        let apartmentModel  = document.querySelector('.avivo-ap-model')
        apartmentModel.innerHTML +=`
            <div class="col">
                <div class="card h-100 border-0">
                    <div class="card-body">
                        <h5 class="card-title fs-2 avivo-ap-model--title">${apartment.title}</h5>
                    </div>
                    <picture  class="img-thumbnail avivo-ap-picture">
                        <source media="(min-width:650px)" srcset="${apartment.imageUrl}">
                        <source media="(min-width:465px)" srcset="${apartment.imageUrl}">
                        <img src="${apartment.imageUrl}" alt="Model 1" class="shadow" >
                    </picture>
                </div>
            </div> 
        `
    });
