import { header } from './header.js';
import { footer } from './footer.js';

export function initialPageLoad() {
  const content = document.getElementById('content');
  const main = document.createElement('div');
  main.classList.add('main');

  // Main statement
  const statement = document.createElement('div');
  const statementTitle = document.createElement('h1');
  const statementContent = document.createElement('p');
  statement.classList.add('home-content');
  statementTitle.textContent = 'Say What?!';
  statementContent.textContent =
    'The Roti Way offers the best Trinidadian food infused with Indian Cuisine. Looking for good time? Then make your reservations today! They also cater all events both small and large! Great place to eat with your spouse or friends';
  statement.appendChild(statementTitle);
  statement.appendChild(statementContent);
  main.appendChild(statement);

  // Operation Hours
  const openTime = document.createElement('div');
  const openTitle = document.createElement('h1');
  const openContent = document.createElement('p');
  openTime.classList.add('home-content');
  openTitle.textContent = 'Hours';
  openContent.innerHTML =
    'Sunday: 11am - 7pm<br>Monday: 10am - 10pm<br>Tuesday: 11am - 10pm<br>Wednesday: 10am - 10pm<br>Thursday: 10am - 10pm<br>Friday: 10am - 11pm<br>Saturday: 10am - 11pm';
  openTime.appendChild(openTitle);
  openTime.appendChild(openContent);
  main.appendChild(openTime);

  // Location
  const location = document.createElement('div');
  const locationTitle = document.createElement('h1');
  const locationContent = document.createElement('p');
  location.classList.add('home-content');
  locationTitle.textContent = 'Location';
  locationContent.innerHTML = '987 Harlem River Lane<br>New York, NY 01201';
  location.appendChild(locationTitle);
  location.appendChild(locationContent);
  main.appendChild(location);

  content.replaceChildren();

  header();
  content.append(main);
  footer();
}
