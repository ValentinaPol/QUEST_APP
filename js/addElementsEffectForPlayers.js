
const accordionBox = document.querySelector('#list-questions');

const addQuestionsEffect = (event) => {
    if(event.target.tagName === 'LI'){
        event.target.style.cssText = 'opacity: 0.85;';
    };
}

const deleteQuestionsEffect = (event) => {
    if(event.target.tagName === 'LI'){
        event.target.style.cssText = 'opacity: 1;';
    };
}

accordionBox.addEventListener('mouseover', addQuestionsEffect);
accordionBox.addEventListener('mouseout', deleteQuestionsEffect);