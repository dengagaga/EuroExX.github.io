const items = document.querySelectorAll('.section_three-item');
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header_burger-btn');
const navListMobil = document.querySelector('.nav_list-mobil');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('section_three-item--active');
    });
});
headerBtn.onclick = () => {
    document.body.classList.toggle('.body--active')
    navListMobil.classList.toggle('navListMobil--active')
    header.classList.toggle('open')
}