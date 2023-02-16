import { header } from './header.js';
import { footer } from './footer.js';

export const contact = () => {
  const content = document.getElementById('content');
  const contactPage = document.createElement('div');
  const contactTitle = document.createElement('h1');
  const contactContent = document.createElement('p');
  const mapLocation = document.createElement('p');

  contactPage.classList.add('contact');
  contactTitle.textContent = 'Connect with us!';
  contactContent.innerHTML =
    'Located at: 987 Harlem River Lane<br>New York, NY 01201 <br> Phone: (212) 555-5555 <br> Email: reservations@TheRotiWay.com';
  mapLocation.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3020.0190544263246!2d-73.95387226232245!3d40.8055750717528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1676511482340!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  contactPage.appendChild(contactTitle);
  contactPage.appendChild(contactContent);
  contactPage.appendChild(mapLocation);

  content.replaceChildren();

  header();
  content.append(contactPage);
  footer();
};
