import { header } from './header.js';
import { footer } from './footer.js';
import roti from './assets/roti.jpg';
import curry from './assets/rice-curry.jpg';
import soup from './assets/curry-soup.jpg';
import drinks from './assets/pine.png';

export const menu = () => {
  const content = document.getElementById('content');
  const menuPage = document.createElement('div');

  // first item content
  const menuItemOne = document.createElement('div');
  const menuTitle = document.createElement('h1');
  const rotiImg = document.createElement('img');
  const menuContent = document.createElement('p');
  menuTitle.textContent = 'Roti';
  menuContent.textContent =
    'Curry chicken, curry potato, dhalpuri, chick peas.';

  // second item content
  const menuItemTwo = document.createElement('div');
  const menuTitleTwo = document.createElement('h1');
  const riceImg = document.createElement('img');
  const menuContentTwo = document.createElement('p');
  menuTitleTwo.textContent = 'Curry and Rice';
  menuContentTwo.textContent =
    'Curry chicken or goat, rice, plantains, chick peas.';

  // third item content
  const menuItemThree = document.createElement('div');
  const menuTitleThree = document.createElement('h1');
  const soupImg = document.createElement('img');
  const menuContentThree = document.createElement('p');
  menuTitleThree.textContent = 'Curry Soup';
  menuContentThree.textContent = 'Curry soup served with rice.';

  // drinks content
  const menuDrinks = document.createElement('div');
  const menuDrinksTitle = document.createElement('h1');
  const drinksImg = document.createElement('img');
  const menuDrinksContent = document.createElement('p');
  menuDrinksTitle.textContent = 'Drinks';
  menuDrinksContent.textContent =
    'Sorrel, Wine, Pineapple Juice, and lots more!!!';

  // image sources for each menu item
  rotiImg.src = roti;
  riceImg.src = curry;
  soupImg.src = soup;
  drinksImg.src = drinks;

  // class name for each item
  rotiImg.classList.add('menu-image');
  riceImg.classList.add('menu-image');
  soupImg.classList.add('menu-image');
  drinksImg.classList.add('menu-image');
  menuItemOne.classList.add('menu-item');
  menuItemTwo.classList.add('menu-item');
  menuItemThree.classList.add('menu-item');
  menuDrinks.classList.add('menu-item');
  menuPage.classList.add('menu');

  // append each item to page
  menuItemOne.appendChild(menuTitle);
  menuItemOne.appendChild(rotiImg);
  menuItemOne.appendChild(menuContent);
  menuPage.appendChild(menuItemOne);

  menuItemTwo.appendChild(menuTitleTwo);
  menuItemTwo.appendChild(riceImg);
  menuItemTwo.appendChild(menuContentTwo);
  menuPage.appendChild(menuItemTwo);

  menuItemThree.appendChild(menuTitleThree);
  menuItemThree.appendChild(soupImg);
  menuItemThree.appendChild(menuContentThree);
  menuPage.appendChild(menuItemThree);

  menuDrinks.appendChild(menuDrinksTitle);
  menuDrinks.appendChild(drinksImg);
  menuDrinks.appendChild(menuDrinksContent);
  menuPage.appendChild(menuDrinks);

  content.replaceChildren();

  header();
  content.append(menuPage);
  footer();
};
