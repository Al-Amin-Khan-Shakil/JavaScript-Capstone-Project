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
    like.innerHTML = '&hearts;';
    container.appendChild(like);

    const commentBTN = document.createElement('button');
    commentBTN.classList.add('comment-button');
    commentBTN.textContent = 'Comments';
    list.appendChild(commentBTN);

    const reservationsBTN = document.createElement('button');
    reservationsBTN.classList.add('reservations-button');
    reservationsBTN.textContent = 'Reservations';
    list.appendChild(reservationsBTN);

    contentContainer.appendChild(list);
  });
};

export default displayList;