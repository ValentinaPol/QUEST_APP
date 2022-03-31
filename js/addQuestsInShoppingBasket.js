let btnSellQuest = document.querySelector('#sell-quest');
let questsCardList = document.querySelectorAll('.card-quest');
let shoppingListBasket = document.querySelector('#shopping-list');
let totalPrice = document.querySelector('#total-price');
let addQuestList = document.querySelector('#add-quest-list');
let btnCheckout = document.querySelector('#checkout-btn');
let iconShoppingBasket = document.querySelector('.fa-cart-shopping');
let iconBasketBusy = document.querySelector('#basket-busy');
let questContainer = document.querySelector('#info-quests');

const openShoppingBasket = () => {
    document.querySelector('#header-text').classList.add('block-hidden');
    document.querySelector('#info-quests').classList.add('block-hidden');
    document.querySelector('#select-container').classList.add('block-hidden');
    document.querySelector('#sort-container').classList.add('block-hidden');
    shoppingListBasket.classList.remove('block-hidden');
    document.querySelector('#search-box').style.display = 'none';
    shoppingListBasket.style.minHeight = '100vh';
}

iconShoppingBasket.addEventListener('click', openShoppingBasket);
    
const addIconBasketBusy = () => {
    if (addQuestList.children[0].tagName !== 'P'){
        iconBasketBusy.classList.remove('block-hidden');
    }
}

const addQuestBasket = async (currentPos) => {
    if (addQuestList.children[0].tagName === 'P'){
        addQuestList.children[0].remove();
    }
    let infoQuests = await getQuestsInfo();
    infoQuests = infoQuests.filter((quest) => {
        if(quest.pos === currentPos){
            return quest;
        }
    });
    let quest = infoQuests[0];
    if(!addRepeatQuest(quest)){
        addQuestList.innerHTML += `
        <tr>
            <td class="col-1">
                <img src=${quest.url} alt="картинка квеста" class="image-shopping-custom">
            </td>
            <td class="col-4">${quest.title}</td>
            <td class="col-4"><a class="waves-effect btn-light btn btn-custom-size btn-discrease py-0 px-1">-</a><span class="px-2">1</span><a class="waves-effect btn-light btn btn-custom-size btn-increase py-0 px-1">+</a></td>
            <td class="col-1">${quest.price}</td>
            <td class="col-1"><i class="fa-solid fa-trash-can"></i></td>
        </tr>
        `
    }
            
    btnCheckout.classList.remove('block-hidden');
    btnCheckout.classList.add('block-open');
    document.querySelector('#search-box').style.display = 'none';
    addIconBasketBusy();
    getTotalPrice();
}

const addQuestToBasketFromCard = ((event) => {
    let currentNumb;
    if(event.target.classList.contains('btn-card-sell')){
        currentNumb = Number(event.target.previousElementSibling.dataset.numb); 
        addQuestBasket(currentNumb);
    }
})

const addQuestToBasketFromModal = ((event) => {
    let currentNumb;
    if(event.target.classList.contains('btn-card-sell')){
        currentNumb = Number(event.target.dataset.numb); 
        addQuestBasket(currentNumb);
    }
})

questContainer.addEventListener('click', addQuestToBasketFromCard);
btnSellQuest.addEventListener('click', addQuestToBasketFromModal);
  

const changeCounterQuests = ((event) => {
    if(event.target.classList.contains('btn-increase')){
        event.target.previousElementSibling.innerHTML = Number(event.target.previousElementSibling.innerHTML) + 1;
    }
    if(event.target.classList.contains('btn-discrease') && Number(event.target.nextElementSibling.innerHTML) > 1){
        event.target.nextElementSibling.innerHTML = Number(event.target.nextElementSibling.innerHTML) - 1;
    }
    getTotalPrice();
})

shoppingListBasket.children[0].children[0].addEventListener('click', changeCounterQuests);

const getTotalPrice = () => {
    totalPrice.innerHTML = 0;
    for (let questItem of addQuestList.children){
        if (addQuestList.children[0].tagName !== 'P'){
            totalPrice.innerHTML = Number(totalPrice.innerHTML) + (parseInt(questItem.children[3].innerHTML)*Number(questItem.children[2].children[1].innerHTML));
        } 
    }
    saveQuests();
}

const shoppingBasketEmpty = () => {
    if(addQuestList.children.length === 0){
        addQuestList.innerHTML = `
        <p>Корзина пуста</p>
        `
        btnCheckout.classList.remove('block-open');
        btnCheckout.classList.add('block-hidden');
        iconBasketBusy.classList.add('block-hidden');
    }  
}

shoppingBasketEmpty();

const deleteQuestShoppingBasket = (event) => {
    if (event.target.tagName === 'I'){
        event.target.parentElement.parentElement.remove();
    }
    getTotalPrice();
    shoppingBasketEmpty();
}

addQuestList.addEventListener('click', deleteQuestShoppingBasket);

const addRepeatQuest = (quest) => {
    for (let questItem of addQuestList.children){
       if(questItem.children[1].innerHTML === quest.title){
        questItem.children[2].children[1].innerHTML = +questItem.children[2].children[1].innerHTML + 1;
        return true;
       }
    }
    return false;
}

const openOrderForm = () => {
    window.location.href = "orderForm.html";
} 


btnCheckout.addEventListener('click', openOrderForm);
    

addIconBasketBusy();
getTotalPrice();