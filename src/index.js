import './style.css';
import displayList from './modules/displaylist.js';
import { getLike } from './modules/Likes.js';

window.addEventListener('load', () => {
  displayList();
  getLike();
});