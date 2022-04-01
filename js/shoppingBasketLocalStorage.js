const questListBasket = document.querySelector('#add-quest-list');
questListBasket.innerHTML = localStorage.getItem('list-quests')?.trim() || `<p>Корзина пуста</p>`;

const saveQuests = () => {
    let currentQuests = questListBasket.innerHTML;
    localStorage.setItem('list-quests', currentQuests);
}

