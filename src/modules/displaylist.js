import buttonEventListener from './popup.js';
import { getLike,addLike } from './Likes.js';

const displayList = async () => {
  const contentContainer = document.getElementById('content-container');
  const sourceURL = 'https://api.tvmaze.com/seasons/1/episodes';

  const response = await fetch(sourceURL);
  const episodeData = await response.json();

  episodeData.forEach((episode) => {
    const list = document.createElement('li');
    list.id = episode.id;

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    list.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = episode.image.medium;
    img.alt = 'episode banner';
    img.classList.add('image');
    imgContainer.appendChild(img);

    const container = document.createElement('div');
    container.classList.add('title-like-container');
    list.appendChild(container);

    const title = document.createElement('div');
    title.classList.add('episode-title');
    title.textContent = `${episode.name}`;
    container.appendChild(title);

    const like = document.createElement('div');
    like.classList.add('like');
    like.innerHTML = `&hearts;`
    // ${getLike(episode.id)}`;
    container.appendChild(like);

    const commentBTN = document.createElement('button');
    commentBTN.classList.add('comment-button');
    commentBTN.textContent = 'Comments';
    commentBTN.type = 'button';
    list.appendChild(commentBTN);

    const reservationsBTN = document.createElement('button');
    reservationsBTN.classList.add('reservations-button');
    reservationsBTN.textContent = 'Reservations';
    // reservationsBTN.id = episode.id;
    list.appendChild(reservationsBTN);

    contentContainer.appendChild(list);
  });
  const listItems = contentContainer.querySelectorAll('li');
  const menuList = document.querySelectorAll('.menu-list');
  const openPopButtons = document.querySelectorAll('.comment-button');
  const likeEl=document.querySelectorAll('.like');
  const listCounter = document.createElement('span');
  listCounter.textContent = `(${listItems.length})`;
  menuList[0].appendChild(listCounter);
  openPopButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      buttonEventListener(e.target.parentElement.id);
    });
  });
  likeEl.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      // console.log(e.target.parentElement.parentElement.id);
      addLike(e.target.parentElement.parentElement.id);
    });
  });
};

export default displayList;