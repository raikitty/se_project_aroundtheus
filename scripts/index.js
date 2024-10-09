const initialCards = [
    {
     name: "Yosemite Valley",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" 
    },
    {
     name: "Lake Louise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
    },
    {
     name: "Bald Mountains",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
    },
    {
     name: "Latemar",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
    },
    {
     name: "Vanoise National Park",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
    },
    {
     name: "Lago di Braies",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
    }
];

const profileEditButton = document.querySelector('#profile-edit-button'); 
const profileEditModal = document.querySelector('#profile-edit-modal');
const profileCloseButton = document.querySelector('#profile-close-button');
const profileFormElement = document.querySelector('#modal-form');
const nameInput = document.querySelector('#modal-title');
const jobInput = document.querySelector('#modal-description');
const profileName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__description');

profileEditButton.addEventListener('click', () => {
    profileEditModal.classList.add('modal_opened');
});

profileCloseButton.addEventListener('click', () => {
    profileEditModal.classList.remove('modal_opened');
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    jobName.textContent = jobInput.value;
  
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

function getCardElement(data) {
    let cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image").src = data.link;
    const cardTitle = document.querySelector('.card__title');
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
}

initialCards.forEach((data) => {

});
