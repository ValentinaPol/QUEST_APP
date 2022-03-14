let btnSellQuest = document.querySelector('#sell-quest');
let questsCardList = document.querySelectorAll('.card-quest');
let imageQuest = document.querySelector('#image-card-quest');
let nameQuest = document.querySelector('#modal-title1');
let questPrice = document.querySelector('#price-quest').children[0];
let shoppingListBasket = document.querySelector('#shopping-list');
let totalPrice = document.querySelector('#total-price');
let addQuestList = document.querySelector('#add-quest-list');
let btnCheckout = document.querySelector('#checkout-btn');
let iconShoppingBasket = document.querySelector('.fa-cart-shopping');
//const formOrder = document.querySelector('#order-form');


iconShoppingBasket.addEventListener('click', function(){
    document.querySelector('#header-text').classList.add('block-hidden');
    document.querySelector('#info-quests').classList.add('block-hidden');
    document.querySelector('#select-container').classList.add('block-hidden');
    document.querySelector('#sort-container').classList.add('block-hidden');
    shoppingListBasket.classList.remove('block-hidden');
    shoppingListBasket.style.minHeight = '100vh';

})

function addQuestBasket(){
    if (addQuestList.children[0].tagName === 'P'){
        addQuestList.children[0].remove();
    }
    if(!addRepeatQuest()){
        addQuestList.innerHTML += `
        <tr>
            <td>
                <img src=${imageQuest.getAttribute('src')} alt="картинка квеста" class="image-shopping-custom">
            </td>
            <td>${nameQuest.innerHTML}</td>
            <td><a class="waves-effect btn-light btn btn-discrease">-</a><span class="px-2">1</span><a class="waves-effect btn-light btn btn-increase">+</a></td>
            <td>${questPrice.innerHTML}</td>
            <td><i class="fa-solid fa-trash-can"></i></td>
        </tr>
        `
        btnCheckout.classList.remove('block-hidden');
        btnCheckout.classList.add('block-open');
    }
    
    getTotalPrice();
}

btnSellQuest.addEventListener('click', addQuestBasket);

shoppingListBasket.children[0].children[1].addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-increase')){
        event.target.previousElementSibling.innerHTML = Number(event.target.previousElementSibling.innerHTML) + 1;
    }
    if(event.target.classList.contains('btn-discrease') && Number(event.target.nextElementSibling.innerHTML) > 1){
        event.target.nextElementSibling.innerHTML = Number(event.target.nextElementSibling.innerHTML) - 1;
    }
    getTotalPrice();
})

function getTotalPrice(){
    totalPrice.innerHTML = 0;
    for (let questItem of addQuestList.children){
        totalPrice.innerHTML = Number(totalPrice.innerHTML) + (parseInt(questItem.children[3].innerHTML)*Number(questItem.children[2].children[1].innerHTML));
    }
}

function shoppingBasketEmpty(){
    if(addQuestList.children.length === 0){
        addQuestList.innerHTML = `
        <p>Корзина пуста</p>
        `
        btnCheckout.classList.remove('block-open');
        btnCheckout.classList.add('block-hidden');
    }
    
}

shoppingBasketEmpty();

addQuestList.addEventListener('click', function(event){
    if (event.target.tagName === 'I'){
        event.target.parentElement.parentElement.remove();
    }
    getTotalPrice();
    shoppingBasketEmpty();
})

function addRepeatQuest(){
    for (let questItem of addQuestList.children){
       if(questItem.children[1].innerHTML === nameQuest.innerHTML){
        questItem.children[2].children[1].innerHTML = +questItem.children[2].children[1].innerHTML + 1;
        return true;
       }
    }
    return false;
}

btnCheckout.addEventListener('click', () => {
    shoppingListBasket.classList.add('block-hidden');
    formOrder.classList.remove('block-hidden');
})

