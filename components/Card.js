export default class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    _setEventListeners() {
        this._cardElement.querySelector('.card__like-button').addEventListener('click', () => {
            this._handleLikeIcon();
        })
        this._cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteCard();
        })
        this._cardImageEl.addEventListener('click', () => { 
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

    _handleImageClick() {
         if (this._handleImageClick) {
            this._handleImageClick({
                name: this._name,
                link: this._link, 
            });
         }
    }

    getView() {
        this._cardElement = this._getTemplate();
        
        this._cardImageEl = this._cardElement.querySelector(".card__image");
        this._cardTitleEl = this._cardElement.querySelector(".card__title");

        this._cardImageEl.src = this._link;
        this._cardImageEl.alt = this._name;
        this._cardTitleEl.textContent = this._name;


        this._setEventListeners();

        return this._cardElement;
    };

    
}