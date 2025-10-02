class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings._inactiveButtonClass;
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
        errorMessageEl.textContent = "";
        errorMessageEl.classList.remove(this._errorClass);

    }
    
    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            return this._showInputError(this._form, inputEl);
        } else {
        this._hideInputError(this._form, inputEl);
        }
    }
    
    _hasInvalidInput() {
        return !this._inputEls.every((inputEl) => inputEl.validity.valid);
    }
    
    _disableButton() {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = true;
    }
    
    _enableButton() {
        this._submitButtonSelector.classList.remove(inactiveButtonClass);
        this._submitButtonSelector.disabled = false;
    }
    
    _togglebuttonState() {
        if(this._hasInvalidInput(this._inputEls)) {
            return this._disableButton(this._submitButtonSelector, this._inactiveButtonClass);
        }

        _enableButton(this._submitButtonSelector, this._inactiveButtonClass); 
    } 

    _setEventListeners() {
        this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        
        this._inputEls.forEach((inputEl) => {
            inputEl.addEventListener("input", () => {
                this._checkInputValidity(this._form, inputEl);
                this._togglebuttonState(this._inputEls, this._submitButton);

            });
        });
    }

    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
    
        this._setEventListeners(this._form);
    }
    
    resetValidation() {
        this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

        this._inputEls.forEach(inputEl => this._hideInputError(this._form, inputEl));
        this._togglebuttonState(this._inputEls, this._submitButton);
    }

}

export default FormValidator;

