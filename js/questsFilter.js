const filterContainer = document.querySelector('#select-container');
//const questListTags = document.querySelector('#info-quests');

const filterQuests = (event) => {
    let filterParameter;
    let chosenValue;
    if(event.target.classList.contains('form-select')){
        filterParameter = event.target.dataset.type;
        let chosenSelect = event.target;
        for (let i = 0; i < chosenSelect.options.length; i++){
            if(chosenSelect.options[i].selected === true && chosenSelect.selectedIndex !== 0){
                chosenValue = chosenSelect.options[i].text;
                displayFilterTasks(filterParameter, chosenValue);
            } 
        }
    }
    
}

filterContainer.addEventListener('click', filterQuests);

const displayFilterTasks = async (filterParameter, chosenValue) => {
    let data = await getQuestsInfo();
    let questContainer = document.querySelector('#info-quests');
    questContainer.innerHTML = '';
    data.forEach((quest) =>{
    if(quest[filterParameter] === chosenValue){
        questContainer.innerHTML += `
        <div class="card col-3 bg-secondary card-quest">
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
                <button type="button" class="btn btn-info">Купить</button>
            </div>
        </div>
        ` 
    }    
  })

}