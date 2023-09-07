const addLike = async (index) => {
  const scoreURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hHoxKTRKINp4PN8g78ys/likes';

  try {
    const response = await fetch(scoreURL, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: index,
      }),
    });

    return response;
  } catch (error) {
    return error;
  }
};

const getLike = async () => {
  try {
    const scoreURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hHoxKTRKINp4PN8g78ys/likes';

    const response = await fetch(scoreURL);
    const likesdata = await response.json();

    const likeElements = document.querySelectorAll('.like');
    likesdata.forEach((item) => {
      likeElements.forEach((arrItem) => {
        const idItem = arrItem.id;
        if (idItem === item.item_id) {
          arrItem.nextSibling.innerHTML = item.likes;
        }
      });
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { addLike, getLike };