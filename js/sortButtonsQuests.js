const sortButtons = document.querySelector('#sort-container');
const questListTags = document.querySelector('#info-quests');

sortButtons.addEventListener('click', (event) => {
    let tag;
    if(event.target.tagName === 'BUTTON'){
        tag = event.target.dataset.tag;
    }
    renderTypeQuestsList(tag);
})

const renderTypeQuestsList = (tag) => {
    modalInfoQuestsList.forEach((quest) =>{
        if(quest.tags.indexOf(tag) !== -1){
            questListTags.innerHTML = '';
            questListTags.innerHTML += `
            <div class="card col-3 bg-secondary card-quest" style="width: 18rem;">
            <img src="${quest.url}" class="card-img-top image-quest" alt="${quest.title}">
            <div class="card-body bg-secondary text-white">
              <h5 class="card-title name-quest">${quest.title}</h5>
              <p class="card-text type-quest text-info mb-0">${quest.type}</p>
              <p class="card-text mb-0">Количество игроков: <span>${quest.players}</span></p>
              <p class="card-text time-quest">Время: <span>${quest.time}</span></p>
              <p class="card-text age-quest">Возраст: <span>${quest.age}</span></p>
            </div>
            <div class="card-body">
              <button type="button" class="btn btn-info info-more" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" data-numb="1">Подробнее</button>
              <button type="button" class="btn btn-info">Забронировать</button>
            </div>
          </div>
            `
        }
    })

}