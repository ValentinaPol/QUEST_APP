const questsList = document.querySelector('#info-quests');
const modal = document.querySelector('#modal-quests-information');

const openModal = async (event) => {
    let currentBtn = event.target;
    let currentNumb = Number(currentBtn.dataset.numb);
    if(currentBtn.classList.contains('info-more')){
        await generateModalInfo(currentNumb);
        modal.classList.add('modal_open');
    }
}

questsList.addEventListener('click', openModal);


const closeModal = (event) => {
    if(event.key === 'Escape' && modal.classList.contains('modal_open')){
        modal.classList.remove('modal_open');
    }
    if(event.target.classList.contains('btn-close') || event.target.classList.contains('btn-modal-close')){
        modal.classList.remove('modal_open');
    }
}

window.addEventListener('keydown', closeModal);

modal.addEventListener('click', closeModal);

const generateModalInfo =  async (currentPos) => {
    let data = await getQuestsInfo();
    data.forEach((quest) => {
        if(quest.pos === currentPos){
            let modalTitle = document.querySelector('#modal-title1');
            let modalDescription = document.querySelector('#modal-body');
            let questPrice = document.querySelector('#price-quest');
            let imageQuest = document.querySelector('#image-card-quest');
            modalTitle.innerHTML = quest.title;
            modalDescription.innerHTML = quest.description;
            questPrice.children[0].innerHTML = quest.price;
            imageQuest.setAttribute('src', quest.url);
            btnSellQuest.setAttribute('data-numb', quest.pos);
        }
    })
}

