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
const addCardModal = document.querySelector('#add-card-modal');
const profileFormElement = document.forms["profile-form"];

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileTitleInput = document.querySelector('#modal-title');;
const profileDescriptionInput = document.querySelector('#modal-description');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
const cardListEl = document.querySelector('.cards__list');
const profileModalCloseButton = profileEditModal.querySelector('#profile-close-button');
const addCardModalCloseButton = addCardModal.querySelector('.modal__close');
const addNewCardButton = document.querySelector('.profile_add-button');

function closeModal(modal) {
    modal.classList.remove('modal_opened');
}

/*  function openModal() {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add('modal_opened'); 
} */

function openModal(modal) {
    modal.classList.add('modal_opened'); 
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal();
}

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    cardTitleEl.textContent = data.name;
    return cardElement;
}

profileEditButton.addEventListener('click', () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profileEditModal);
});    


profileModalCloseButton.addEventListener('click', () => closeModal(profileEditModal));

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// add new card 
addNewCardButton.addEventListener('click', () => openModal(addCardModal));
addCardModalCloseButton.addEventListener('click', () => closeModal(addCardModal));

initialCards.forEach((data) => {
    const cardElement = getCardElement(data);
    cardListEl.prepend(cardElement);
});
