import './style.css';
import { initialPageLoad } from './initialPageLoad';
import { menu } from './menu';
import { contact } from './contact';

initialPageLoad();

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', initialPageLoad);

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', menu);

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', contact);
