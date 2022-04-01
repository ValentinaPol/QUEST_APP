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
const orderModal = document.querySelector('#modal-quest-repeat');

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
    if(inputPhoneNumber.value.trim() !== '' && inputPhoneNumber.value.length == 16 && inputPhoneNumber.value[0] == 3 && inputPhoneNumber.value[1] == 7 && inputPhoneNumber.value[2] == 5){
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

const openDeliveryForm = (event) => {
    if (event.target.tagName === 'INPUT' && formOrder.elements.inputDeliveryWay[0].checked === true){
        document.querySelector('.delivery-form').classList.remove('block-hidden');
    }else {
        document.querySelector('.delivery-form').classList.add('block-hidden');
    } 
}

chooseDeliveryWay.addEventListener('click', (event) => openDeliveryForm(event));
    


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

const validateFormOrder = (() =>{
    var isErrorFound = false;
    if(!validateName() && !isErrorFound){
        inputName.scrollIntoView();
        inputName.focus();
        isErrorFound = true;
    };
    if(!validateSurname() && !isErrorFound){
        inputSurname.scrollIntoView();
        inputSurname.focus();
        isErrorFound = true;
    };
    if(!validatePhoneNumber() && !isErrorFound){
        inputPhoneNumber.scrollIntoView();
        inputPhoneNumber.focus();
        isErrorFound = true;
    };
    if(!validateEmail() && !isErrorFound){
        inputEmail.scrollIntoView();
        inputEmail.focus();
        isErrorFound = true;
    };
    if(formOrder.elements.inputDeliveryWay[0].checked){
        if(!validateCity() && !isErrorFound){
            inputCity.scrollIntoView();
            inputCity.focus();
            isErrorFound = true;
        };
        if(!validateStreet() && !isErrorFound){
            inputStreet.scrollIntoView();
            inputStreet.focus();
            isErrorFound = true;
        };
        if(!validateNumberHouse() && !isErrorFound){
            inputNumberHouse.scrollIntoView();
            inputNumberHouse.focus();
            isErrorFound = true;
        };
    }
    
    return !isErrorFound;
})

formOrder.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValidForm = validateFormOrder(); 
    formOrder.reset();
    if(isValidForm){
        openOrderModal();
        localStorage.removeItem('list-quests');
    } 
})


const openOrderModal= () => {
    orderModal.classList.add('modal_open');
}

const closeOrderModal = (event) => {
    if(event.key === 'Escape' && orderModal.classList.contains('modal_open')){
        orderModal.classList.remove('modal_open');
    }
    if(event.target.classList.contains('btn-modal-close')){
        orderModal.classList.remove('modal_open');
    }
}

window.addEventListener('keydown', closeOrderModal);

orderModal.addEventListener('click', closeOrderModal);
