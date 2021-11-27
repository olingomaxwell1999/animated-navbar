let toggle = document.querySelector('.toggleBtn');

let menu = document.querySelector('.menuContainer');

toggle.onclick = () => {
    menu.classList.toggle('active');
}