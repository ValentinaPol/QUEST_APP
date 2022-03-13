const formOrder = document.querySelector('#order-form');
const inputName = document.querySelector('#floatingInputName');
const inputSurname = document.querySelector('#floatingInputSurName');
const inputPhoneNumber = document.querySelector('#floatingInputNumberPhone');
const inputEmail = document.querySelector('#floatingInputEmail');
const choosePayWay = document.querySelector('#way-pay');
const chooseDeliveryWay = document.querySelector('#delivery-checkbox');
const inputCity = document.querySelector('#floatingInputCity');
const inputStreet = document.querySelector('#floatingInputStreet');
const inputNumberHouse = document.querySelector('#floatingInputHouse');
const inputComment = document.querySelector('#add-comment');
const btnAddOrder = document.querySelector('#order-btn');

const validateName = () => {
    if(inputName.value.trim() !== '' && inputName.value[0] === inputName.value[0].toUpperCase() && inputName.value.length >= 3){
        inputName.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputName.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputName.addEventListener('blur', validateName);

const validateSurname = () => {
    if(inputSurname.value.trim() !== '' && inputSurname.value[0] === inputSurname.value[0].toUpperCase() && inputSurname.value.length >= 3){
        inputSurname.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputSurname.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputSurname.addEventListener('blur', validateSurname);

const validatePhoneNumber = () => {
    if(inputPhoneNumber.value.trim() !== '' && inputPhoneNumber.value.length == 12 && inputPhoneNumber.value[0] == 3 && inputPhoneNumber.value[1] == 7 && inputPhoneNumber.value[2] == 5){
        inputPhoneNumber.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputPhoneNumber.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputPhoneNumber.addEventListener('blur', validatePhoneNumber);

const validateEmail = () => {
    if(inputEmail.value.trim() !== '' && inputEmail.value.indexOf('@') != -1){
        inputEmail.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputEmail.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputEmail.addEventListener('blur', validateEmail);

const validateCity = () => {
    if(inputCity.value.trim() !== '' && inputCity.value.length >= 3){
        inputCity.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputCity.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputCity.addEventListener('blur', validateCity);

const validateStreet = () => {
    if(inputStreet.value.trim() !== '' && inputStreet.value.length >= 5){
        inputStreet.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputStreet.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputStreet.addEventListener('blur', validateStreet);

const validateNumberHouse = () => {
    if(inputNumberHouse.value.trim() !== ''){
        inputNumberHouse.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputNumberHouse.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputNumberHouse.addEventListener('blur', validateNumberHouse);

formOrder.addEventListener('submit', (event) =>{
    var isErrorFound = false;
    if(!validateName() && !isErrorFound){
        form.elements.developerName.scrollIntoView();
        form.elements.developerName.focus();
        isErrorFound = true;
        event.preventDefault();

    };
    if(!validateSurname() && !isErrorFound){
        form.elements.nameSite.scrollIntoView();
        form.elements.nameSite.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validatePhoneNumber() && !isErrorFound){
        form.elements.urlSite.scrollIntoView();
        form.elements.urlSite.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateEmail() && !isErrorFound){
        form.elements.dateStartSite.scrollIntoView();
        form.elements.dateStartSite.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateCity() && !isErrorFound){
        form.elements.visitorsDay.scrollIntoView();
        form.elements.visitorsDay.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    if(!validateStreet() && !isErrorFound){
        form.elements.emailCommunication.scrollIntoView();
        form.elements.emailCommunication.focus();
        isErrorFound = true;
        event.preventDefault();
    };
    //validateRadioPlace();
    if(!validateNumberHouse() && !isErrorFound){
        form.elements.siteDescription.scrollIntoView();
        form.elements.siteDescription.focus();
        isErrorFound = true;
        event.preventDefault();
    };
})