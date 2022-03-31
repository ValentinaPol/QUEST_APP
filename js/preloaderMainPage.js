let preloaderMainPage = document.querySelector('#main-page-preloader');
let headContent = document.querySelector('#head-content');
let selectContainer = document.querySelector('#select-container');
let sortContainer = document.querySelector('#sort-container');
let searchContainer = document.querySelector('#search-container');

const swichPreloader = () => {
    if(preloaderMainPage.classList.contains('block-hidden')){
        headContent.classList.add('block-hidden');
        selectContainer.classList.add('block-hidden');
        sortContainer.classList.add('block-hidden');
        searchContainer.classList.add('block-hidden');
        preloaderMainPage.classList.remove('block-hidden');
    } else {
        headContent.classList.remove('block-hidden');
        selectContainer.classList.remove('block-hidden');
        sortContainer.classList.remove('block-hidden');
        searchContainer.classList.remove('block-hidden');
        preloaderMainPage.classList.add('block-hidden');
    } 
}
