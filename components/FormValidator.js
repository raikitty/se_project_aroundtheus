class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings._inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass
        this._errorClass = settings.errorClass;
        
        this._form = formElement;
    }

    _showInputError(inputEl, errorMessageEl) {
        const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        errorMessageEl.textContent = inputEl.validationMessage;
        errorMessageEl.classList.add(this._errorClass);  
    }

    _hideInputError(inputEl) {
        const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        errorMessageEl.textContent = "";
        errorMessageEl.classList.remove(this._errorClass);

    }
    
    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            return showInputError(this._form, inputEl);
        }

        hideInputError(this._form, inputEl);
    }
    
    _hasInvalidInput(inputlist) {
        return !inputlist.every((inputEl) => inputEl.validity.valid);
    }
    
    _disableButton() {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = true;
    }
    
    _enableButton() {
        this._submitButtonSelector.classList.remove(inactiveButtonClass);
        this._submitButtonSelector.disabled = false;
    }
    
    _togglebuttonState(inputEls) {
        if(hasInvalidInput(inputEls)) {
            return disableButton(this._submitButtonSelector, this._inactiveButtonClass);
        }

        enableButton(this._submitButtonSelector, this._inactiveButtonClass); 
    } 

    _setEventListeners() {
        this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        
        inputEls.forEach((inputEl) => {
            inputEl.addEventListener("input", () => {
                checkInputValidity(this._form, inputEl);
                togglebuttonState(this._inputEls, this._submitButton);

            });
        });
    }

    enableValication() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
    
        setEventListeners(this._form, options);
    }
    
    resetValidation() {
        this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

        inputEls.forEach(inputEl => hideInputError(this._form, inputEl));
        togglebuttonState(this._inputEls, this._submitButton);
    }

}


