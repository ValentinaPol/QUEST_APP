let questBox = document.querySelector('#info-quests');

const addCardQuestEffect = (event) => {
    /*if(event.target.closest('.card-quest')){
        event.target.parentElement.style.cssText = 'opacity: 0.6; cursor: pointer;';
    }*/
    if(event.target.tagName === 'BUTTON'){
        event.target.style.cssText = 'opacity: 0.5; cursor: pointer; backgroud-color: white; border: solid 1px aqua';
    }
}

const deleteCardQuestEffect = (event) => {
    /*if(event.target.closest('.card-quest')){
        event.target.parentElement.style.cssText = 'opacity: 1;';
    }*/
    if(event.target.tagName === 'BUTTON'){
        event.target.style.cssText = 'opacity: 1;';
    }
}

questBox.addEventListener('mouseover', addCardQuestEffect);
questBox.addEventListener('mouseout', deleteCardQuestEffect);