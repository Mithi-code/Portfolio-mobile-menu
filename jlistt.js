import helperFunc from './querysel.js';

export const hamburger = document.querySelector('.toggle');
const navList = document.querySelectorAll('.nav-list');
export const dropDown = document.querySelector('lang-dropdown');
const navMenu = document.querySelector('header > nav > .hamburger');

/**
 * @function {clickHandler}
 * @param {click} e
 * @description handles the opening and closing of the hamburger mobile menu
 */
export const clickHandler = (e) => {
  e.preventDefault();
  navMenu.insertAdjacentHTML(
    'beforeend',
    `
    <div class="hamburger-mobile-menu ">
        <div class="close">
          <img src="closeicon.svg" />
        </div>
        <ul class="ulList">
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    `,
  );
  const menuList = document.querySelector('.hamburger-mobile-menu');
  helperFunc('blur(15px)', menuList, 'none', 0);
  const closer = document.querySelector('.close');
  closer.addEventListener('click', () => helperFunc('blur(0)', menuList, 'block', '770px'));
  const ulList = Array.from(document.querySelectorAll('.ulList li'));

  ulList.forEach((list) => {
    list.addEventListener('click', () => {
      helperFunc('blur(0)', menuList, 'block', '770px');
    });
  });
};

// nav list active toggle
navList.forEach((item) => {
  item.addEventListener('click', (e) => {
    document.querySelector('.nav-list.active').classList.remove('active');
    e.currentTarget.classList.add('active');
  });
});
