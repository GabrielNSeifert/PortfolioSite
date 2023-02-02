function openCloseMenu() {

const menuBtn = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');
let stateMenu = false;

menuBtn.addEventListener('click', () => {

    if (stateMenu == false) {
        menuList.style.display = 'block';
        menuBtn.setAttribute('src', './assets/iconButtonClose.png');
        menuBtn.setAttribute('title', 'Fechar menu.');
        stateMenu = true;
    } else {
        menuList.style.display = 'none';
        menuBtn.setAttribute('src', './assets/iconButtonOpen.png');
        menuBtn.setAttribute('title', 'Abrir Menu.');
        stateMenu = false;
    }
});

}

openCloseMenu();