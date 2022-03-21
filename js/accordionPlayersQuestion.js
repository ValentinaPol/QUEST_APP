const listQuestions = document.querySelector('#list-questions');

const openCloseAnswers = (event) => {
    if(event.target.classList.contains('list-group-item')){
        event.target.nextElementSibling.classList.toggle('answer-item-show');
    }
}

listQuestions.addEventListener('click', openCloseAnswers);