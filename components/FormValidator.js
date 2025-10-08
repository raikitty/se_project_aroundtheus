class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass
        this._errorClass = settings.errorClass;
        
        this._form = formElement;
    }

    _showInputError(inputEl) {
        const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        errorMessageEl.textContent = inputEl.validationMessage;
        errorMessageEl.classList.add(this._errorClass);  
    }

    _hideInputError(inputEl) {
        const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
        console.log(inputEl);
        inputEl.classList.remove(this._inputErrorClass);
        errorMessageEl.classList.remove(this._errorClass);
        errorMessageEl.textContent = "";

    }
    
    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(inputEl);
        } else {
            this._hideInputError(inputEl);
        }
    }
    
    _hasInvalidInput() {
        return !this._inputEls.every((inputEl) => inputEl.validity.valid);
    }
    
    disableButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }
    
    enableButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    }
    
    _togglebuttonState() {
        if(this._hasInvalidInput()) {
            this.disableButton();
        } else {
            this.enableButton();
        } 
    } 

    _setEventListeners() {
        this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

        this._togglebuttonState();
        
        this._inputEls.forEach((inputEl) => {
            inputEl.addEventListener("input", (e) => {
                this._checkInputValidity(inputEl);
                this._togglebuttonState();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
    
        this._setEventListeners();
    }
    
    resetValidation() {
        this._inputEls.forEach(inputEl => this._hideInputError(inputEl));
        this._togglebuttonState();
    }

}

export default FormValidator;

