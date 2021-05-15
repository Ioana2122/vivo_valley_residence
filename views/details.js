    const apartments = [
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

    let apartmentModel  = document.querySelector('.avivo-ap-model');
    displayModels(apartments,apartmentModel);

    let modalDetails = document.querySelectorAll('.avivo-ap-model--item');
    displayModalDetails(modalDetails)

    document.querySelector('.go-up-btn-arrow').addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })