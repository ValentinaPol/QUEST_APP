let questBox = document.querySelector('#info-quests');

const addButtonsEffect = (event) => {
    if(event.target.tagName === 'BUTTON'){
        event.target.style.cssText = 'opacity: 0.8; cursor: pointer;';
    }
}

const deleteButtonsEffect = (event) => {
    if(event.target.tagName === 'BUTTON'){
        event.target.style.cssText = 'opacity: 1;';
    }
}

questBox.addEventListener('mouseover', addButtonsEffect);
questBox.addEventListener('mouseout', deleteButtonsEffect);

sortContainer.addEventListener('mouseover', addButtonsEffect);
sortContainer.addEventListener('mouseout', deleteButtonsEffect);