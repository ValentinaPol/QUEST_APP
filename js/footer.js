const footerIcons = document.querySelector('#footer-icons');
const footerContacts = document.querySelector('#footer-contacts');

const addIconsEffect = (event) => {
    if(event.target.tagName === 'A'){
        event.target.style.cssText = 'opacity: 0.8; color: aqua; cursor: pointer;';
    }
}

const deleteIconsEffect = (event) => {
    if(event.target.tagName === 'A'){
        event.target.style.cssText = 'opacity: 1;';
    }
}

footerIcons.addEventListener('mouseover', addIconsEffect);
footerIcons.addEventListener('mouseout', deleteIconsEffect);

footerContacts.addEventListener('mouseover', addIconsEffect);
footerContacts.addEventListener('mouseout', deleteIconsEffect);