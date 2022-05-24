const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const menu = document.getElementById('menu_btn');
const search = document.getElementById('search');
const modeSwitch = document.querySelector('.toggle-switch');
const modeText = document.querySelector('.mode-text');

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
});

menu.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

search.addEventListener('click', () => {
  sidebar.classList.remove('close');
})
