//const formReview = document.querySelector('#form-review');
//const inputReviewerName = document.querySelector('#fname-review');
const chooseQuestName = document.querySelector('#quest-title-review');
const chooseQuestMark = document.querySelector('#quest-mark');
//const inputTextReview = document.querySelector('#review-text');

const validateReviewerName = () => {
    if(inputReviewerName.value.trim() !== '' && inputReviewerName.value[0] === inputReviewerName.value[0].toUpperCase() && inputReviewerName.value.length >= 3){
        inputReviewerName.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputReviewerName.nextElementSibling.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputReviewerName.addEventListener('blur', validateReviewerName);

const validateQuestTitle = () => {
    for (let i = 0; i < chooseQuestName.options.length; i++){
        if(chooseQuestName.options[i].selected === true){
            if(i !== 0){
                chooseQuestName.nextElementSibling.style.display = 'none';
            return true;
            } else {
                chooseQuestName.nextElementSibling.style.display = 'block';
                return false;
            }
        }
        
    }
}

chooseQuestName.addEventListener('blur', validateQuestTitle);

const validateQuestMark = () => {
    for (let i = 0; i < chooseQuestMark.options.length; i++){
        if(chooseQuestMark.options[i].selected === true){
            if(chooseQuestMark.selectedIndex !== 0){
                chooseQuestMark.nextElementSibling.style.display = 'none';
            return true;
            } else {
                chooseQuestMark.nextElementSibling.style.display = 'block';
                return false;
            }
        } 
    }
}

chooseQuestMark.addEventListener('blur', validateQuestMark);

const validateTextReview = () => {
    if(inputTextReview.value.trim() !== '' && inputTextReview.value.length >= 5){
        inputTextReview.nextElementSibling.style.display = 'none';
        return true;
    } else {
        inputTextReview.nextElementSibling.style.display = 'block';
        return false;
    }
}

inputTextReview.addEventListener('blur', validateTextReview);

const validateFormReview = (() =>{
    var isErrorFound = false;
    if(!validateReviewerName() && !isErrorFound){
        inputReviewerName.scrollIntoView();
        inputReviewerName.focus();
        isErrorFound = true;
    };
    if(!validateQuestTitle() && !isErrorFound){
        chooseQuestName.scrollIntoView();
        chooseQuestName.focus();
        isErrorFound = true;
    };
    if(!validateQuestMark() && !isErrorFound){
        chooseQuestMark .scrollIntoView();
        chooseQuestMark .focus();
        isErrorFound = true;
    };
    if(!validateTextReview() && !isErrorFound){
        inputTextReview.scrollIntoView();
        inputTextReview.focus();
        isErrorFound = true;
    };
    return !isErrorFound;
})

formReview.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateFormReview()){
        postNewReviews();
    }
    
})