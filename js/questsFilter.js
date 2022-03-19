const filterContainer = document.querySelector('#select-container');
//const questListTags = document.querySelector('#info-quests');
let currentFilter = {};

const filterQuests = (event) => {
    let filterParameter;
    let chosenValue;
    if(event.target.classList.contains('form-select')){
        filterParameter = event.target.dataset.type;
        let chosenSelect = event.target;
        for (let i = 0; i < chosenSelect.options.length; i++){
            if(chosenSelect.options[i].selected === true && chosenSelect.selectedIndex !== 0){
                chosenValue = chosenSelect.options[i].text;
                currentFilter[filterParameter] = chosenValue;
            } else if(chosenSelect.options[i].selected === true && chosenSelect.selectedIndex === 0){
                currentFilter[filterParameter] = undefined;  

            }
        }
        displayFilterTasks();
    }  
}

filterContainer.addEventListener('click', filterQuests);

const displayFilterTasks = async () => {
    let data = await getQuestsInfo();
    let questContainer = document.querySelector('#info-quests');
    questContainer.innerHTML = '';
    data = data.filter((quest) => {
        let valid = true;
        for(let key in currentFilter){
            if(key === 'players' && currentFilter[key] !== undefined){
                let selectedPlayers = Number(currentFilter[key]);
                let minAge = Number(quest.players.split('-')[0]);
                let maxAge = Number(quest.players.split('-')[1]);
                if(selectedPlayers < minAge || selectedPlayers > maxAge){
                    valid = false;
                }
            } else if(currentFilter[key] !== undefined && quest[key] !== currentFilter[key]){
                valid = false;
            }
        }
        return valid;
    })
    
    if(data.length === 0){
        document.querySelector('#quest-container').style.minHeight = '100vh';
        questContainer.innerHTML = '<p class="text-center text-info">К сожалению по Вашему запросу ничего не найдено</p>';
    } else {
        data.forEach((quest) =>{
    
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
                    <button type="button" class="btn btn-info">Приобрести</button>
                </div>
            </div>
            ` 
           
      })
    }
}