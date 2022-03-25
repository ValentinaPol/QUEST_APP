//const reviewsList = document.querySelector('#reviews-list');


const inputReviewerName = document.querySelector('#fname-review');
const questTitle = document.querySelector('#quest-title-review');
const questMark = document.querySelector('#quest-mark');
const inputTextReview = document.querySelector('#review-text');

//const addNewReviewBtn = document.querySelector('#add-new-review');
const formReview = document.querySelector('#form-review');

const chooseQuestTitle = async () => {
    let data = await getQuestsInfo();
    data.forEach(quest =>{
        let selectQuestTitle = document.querySelector('#quest-title-review');
        selectQuestTitle.innerHTML += `
        <option value="${quest.pos}">${quest.title}</option>
      ` 
    })
}

chooseQuestTitle();


const findCurrentQuestTitle = () => {
    let currentQuestTitle;
    for (let i = 0; i < questTitle.length; i++){
        if(questTitle.options[i].selected === true && questTitle.selectedIndex !== 0){
            currentQuestTitle = questTitle.options[i].text;
        }
    }
    return currentQuestTitle;
}


const findCurrentQuestMark = () => {
    let currentQuestMark;
    for (let i = 0; i < questMark.length; i++){
        if(questMark.options[i].selected === true && questMark.selectedIndex !== 0){
            currentQuestMark = questMark.options[i].value;
            console.log(currentQuestMark);
        }
    }
    return currentQuestMark;
}

questMark.addEventListener('blur', findCurrentQuestMark);

const postNewReviews = async (event) => {
    event.preventDefault();

    let currentQuestTitle = findCurrentQuestTitle();
    let currentQuestMark = findCurrentQuestMark();

    const options = {
        method: 'POST', 
        body: JSON.stringify({
            reviewerName: inputReviewerName.value,
            questTitle: currentQuestTitle,
            questMark: currentQuestMark,
            textReview: inputTextReview.value,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    }
    fetch('https://quest-reviews-app.herokuapp.com/api/reviews', options).then(
        res => {
            return res.json();
        }
    ).then(
        data => {
            console.log(data)
            getDataReviews()
        }
    )

    inputReviewerName.value = '';
    questTitle.selectedIndex = 0;
    questMark.selectedIndex = 0;
    inputTextReview.value = '';
}

formReview.addEventListener('submit', postNewReviews);

/*const createNewReviewCard = () => {
    let currentQuestTitle = findCurrentQuestTitle();
    let currentQuestMark = findCurrentQuestMark();

    reviewsList.innerHTML += `
        <div class="col-4 bg-secondary card-review">
            <p class="card-text" id="reviewer-name">${inputReviewerName.value}</p>
            <p class="card-text text-info mb-0" id="add-review-data">${new Date()}</p>
            <p class="card-text mb-0" id="add-quest-title">${currentQuestTitle}</p>
            <p class="card-text mb-0" id="add-quest-mark">Оценка: ${currentQuestMark}/5</p>
            <p class="card-text" id="add-review-text">${inputTextReview.value}</p>
        </div>
    `
    inputReviewerName.value = '';
    questTitle.selectedIndex = 0;
    questMark.selectedIndex = 0;
    inputTextReview.value = '';
}

formReview.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewReviewCard();
});*/