URL_QUESTS = 'http://localhost:3000/quests';


const getQuestsInfo = async () => {
    try{
        const fetchRes = await fetch(URL_QUESTS);
        return fetchRes.json();
    } catch (e) {
        console.log(e);
    }
}

const renderQuestCard = async () => {
    let data = await getQuestsInfo();
    data.forEach(quest =>{
        let questContainer = document.querySelector('#info-quests');
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
                <button type="button" class="btn btn-info">Забронировать</button>
            </div>
        </div>
        ` 
    })
}

renderQuestCard();

/*const renderQuestCards = () => {
    fetch(URL_QUESTS).then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            data.forEach(quest =>{
                let questContainer = document.querySelector('#info-quests');
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
                        <button type="button" class="btn btn-info">Забронировать</button>
                    </div>
                </div>
                ` 
            })
        }
    )
}

renderQuestCards();*/
