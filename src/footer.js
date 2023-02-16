import facebook from './assets/face.png';
import twitter from './assets/twit.png';
import instagram from './assets/insta.png';

export function footer() {
  const content = document.getElementById('content');
  const pageFooter = document.createElement('div');
  const faceImg = document.createElement('img');
  const twitImg = document.createElement('img');
  const instaImg = document.createElement('img');
  const textHolder = document.createElement('div');
  const text = document.createElement('div');
  const a = document.createElement('a');
  const link = document.createTextNode('Icon8');
  const aTwo = document.createElement('a');
  const linkTwo = document.createTextNode('Free Pik');
  const aThree = document.createElement('a');
  const linkThree = document.createTextNode('Pixabay');

  a.appendChild(link);
  aTwo.appendChild(linkTwo);
  aThree.appendChild(linkThree);

  faceImg.src = facebook;
  twitImg.src = twitter;
  instaImg.src = instagram;
  text.innerHTML = '&copy; 2023 TriniLuke / TOP - The Odin Project';
  a.href = 'https://icons8.com/';
  a.title = 'ICON8';
  aTwo.href = 'https://www.freepik.com';
  aTwo.title = 'FreePik';
  aThree.href = 'https://pixabay.com';
  aThree.title = 'Pixabay';

  faceImg.classList.add('footer-img');
  twitImg.classList.add('footer-img');
  instaImg.classList.add('footer-img');
  textHolder.classList.add('text-holder');
  a.classList.add('footer-link');
  aTwo.classList.add('footer-link');
  aThree.classList.add('footer-link');
  pageFooter.classList.add('footer');

  textHolder.appendChild(a);
  textHolder.appendChild(aTwo);
  textHolder.appendChild(aThree);
  textHolder.appendChild(text);
  pageFooter.appendChild(faceImg);
  pageFooter.appendChild(twitImg);
  pageFooter.appendChild(instaImg);
  pageFooter.appendChild(textHolder);

  content.appendChild(pageFooter);
}
