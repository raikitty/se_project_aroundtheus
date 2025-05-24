// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl,inputEl, {inputErrorClass, errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContext = inputEl.validationMessage;
    errorMessageEl.classlist.add(errorClass);  
}

function hideInputError(formEl,inputEl, {inputErrorClass, errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContext = "";
    errorMessageEl.classlist.remove(errorClass);  
}

function checkInputValidity(formEl, inputEl, options) {
    if (!inputEl.validity.valid) {
        return showInputError(formEl, inputEl, options);
    }
    
    hideInputError(formEl,inputEl, options);
    
}

function hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);

}

function disableButton(submitButton, {inactiveButtonClass}) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
}

function enableButton(submitButton, {inactiveButtonClass}) {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
}

function togglebuttonState(inputEls) {
    if(hasInvalidInput(inputEls)) {
        disableButton();
    } 

    enableButton();    
}

function setEventListeners(formEl, options) {
    const {inputSelector} = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = (formEl.querySelector('.modal__button'));
    inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", () => {
            checkInputValidity(formEl, inputEl, options);
            togglebuttonState(inputEls, submitButton, options);

        })
    })

}

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    
    setEventListeners(formEl, options);

    // look for all ionputs inside of form
    // loop through all the inputs to see if all are valid
        // if input is not valid 
            // get validation message 
            // add error class to input
            // display error message
            // disable button
        // if all inputs are valid
            // enable button
            // reset error messages

});
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}

enableValidation(config);