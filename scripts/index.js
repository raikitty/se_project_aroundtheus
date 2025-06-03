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
const addCardForm = document.querySelector('#add-card-form');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileTitleInput = document.querySelector('#modal-title');;
const profileDescriptionInput = document.querySelector('#modal-description');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
const cardListEl = document.querySelector('.cards__list');
const profileModalCloseButton = profileEditModal.querySelector('#profile-close-button');

const addCardModalCloseButton = addCardModal.querySelector('.modal__close');
const addNewCardButton = document.querySelector('.profile__add-button');
const addCardTitle = addCardModal.querySelector('.modal__input_type_title');
const addCardUrl = addCardModal.querySelector('.modal__input_type_url');

const previewImageModal = document.querySelector("#preview-image-modal");
const previewTitleEl = previewImageModal.querySelector(".modal__title");
const previewImageEl = previewImageModal.querySelector(".modal__image");
const previewModalCloseBtn = previewImageModal.querySelector(".modal__close");


function closeModal(modal) {
    modal.classList.remove('modal_opened');
    document.removeEventListener('keydown', handleEsc);
}

function openModal(modal) {
    modal.classList.add('modal_opened'); 
    modal.addEventListener('click', handleOverlay);
    document.addEventListener('keydown', handleEsc);
}

function handleOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        closeModal(evt.target);
    }
}

function handleEsc(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
        const modal = document.querySelector('.modal_opened');
        closeModal(modal);
    }
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profileEditModal);
}

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardTitleEl = cardElement.querySelector('.card__title');
    
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', () => {
        cardElement.remove();    
    });

    cardImageEl.addEventListener("click", () => {
        openModal(previewImageModal);
        previewImageEl.src = data.link;
        previewImageEl.alt = data.name;
        previewTitleEl.textContent = data.name;
    });
       
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle("card__like-button_active");
    });

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

addCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = addCardTitle.value;
    const link = addCardUrl.value; 
    const cardEl = getCardElement({name, link});
    cardListEl.prepend(cardEl);
    evt.target.reset();
    closeModal(addCardModal); 
});

addNewCardButton.addEventListener('click', () => openModal(addCardModal));
addCardModalCloseButton.addEventListener('click', () => closeModal(addCardModal));

//preview image
previewImageEl.addEventListener("click", () => {
    previewTitleEl.value = previewTitleEl.textContent;
    openModal(previewImageModal);
});

previewModalCloseBtn.addEventListener("click", () => {
    closeModal(previewImageModal);
});

initialCards.forEach((data) => {
    const cardElement = getCardElement(data);
    cardListEl.prepend(cardElement);
});

