export default class Card {
    constructor({name, link}, cardSelector, handleImageClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handeImageClick = handleImageClick;
    }

    _setEventListeners() {
        this._cardElement.querySelector('.card__like-button').addEventListener('click', () => {
            this._handleLikeIcon();
        })
        this._cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteCard();
        })
        this._cardImageElement.addEventListener('click', () => { 
            this._handleImageClick(this);
        })
    }
    
    _handleLikeIcon() {
        this._cardElement.querySelector('.card__like-button').classList.toggle("card__like-button_active");
    }

    _handleDeleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    getView() {
        this._cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
        // get card view
        // set evemt lisnters
        this._setEventListeners();
        // return the card
    }
}