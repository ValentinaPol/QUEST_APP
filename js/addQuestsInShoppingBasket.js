let btnSellQuest = document.querySelector('#sell-quest');
let questsCardList = document.querySelectorAll('.card-quest');
let imageQuest = document.querySelector('#image-card-quest');
let nameQuest = document.querySelector('#modal-title1');
let questPrice = document.querySelector('#price-quest').children[0];
let shoppingListBasket = document.querySelector('#shopping-list');


function addQuestBasket(){
    let newQuestItem = document.querySelector('#product-card');
    newQuestItem.children[1].innerHTML += `<tbody><tr><td><img src=${imageQuest.getAttribute('src')} alt="картинка квеста" class="image-shopping-custom"></td><td>${nameQuest.innerHTML}</td><td><a class="waves-effect btn-light btn btn-discrease">-</a><span class="px-2">1</span><a class="waves-effect btn-light btn btn-increase">+</a></td><td>${questPrice.innerHTML}</td><td><i class="fa-solid fa-trash-can"></i></td></tr></tbody>`;
    
}

btnSellQuest.addEventListener('click', addQuestBasket);

shoppingListBasket.children[0].children[1].addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-increase')){
        event.target.previousElementSibling.innerHTML = Number(event.target.previousElementSibling.innerHTML) + 1;
    }
    if(event.target.classList.contains('btn-discrease') && Number(event.target.nextElementSibling.innerHTML) > 1){
        event.target.nextElementSibling.innerHTML = Number(event.target.nextElementSibling.innerHTML) - 1;
    }
})

