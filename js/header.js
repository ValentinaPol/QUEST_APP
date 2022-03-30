const headerMenu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('#close');
const contactsLink = document.querySelector('#header-contacts');


const showBurgerMenu = () => {
    headerMenu.classList.add('show');
}

burgerBtn.addEventListener('click', showBurgerMenu);

const closeBurgerMenu = () => {
    headerMenu.classList.remove('show');
}

closeBtn.addEventListener('click', closeBurgerMenu);

const addHeaderLinkEffect = ((event) =>{
    if(event.target.tagName === 'A'){
        event.target.style.cssText = 'opacity: 0.6; color:aqua; cursor: pointer;';
    };
})

const deleteHeaderLinkEffect = ((event) =>{
    if(event.target.tagName === 'A'){
        event.target.style.cssText = 'opacity: 1; color:white; cursor: none;';
    };
})

headerMenu.addEventListener('mouseover', addHeaderLinkEffect);

headerMenu.addEventListener('mouseout', deleteHeaderLinkEffect);



const sctollToContacts = () => {
    window.scrollTo(0, document.body.scrollHeight);
}

contactsLink.addEventListener('click', sctollToContacts);