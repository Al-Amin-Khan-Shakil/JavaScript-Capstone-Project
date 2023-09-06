const addLike = async (index) => {
  const scoreURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NYnW2fT7jUZBAaXgUPX8/likes/';

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

    const likedata = await response.json();
    return likedata;
  } catch (error) {
    return error;
  }
};

const getLike = async (id) => {
  const scoreURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NYnW2fT7jUZBAaXgUPX8/likes/';

  const response = await fetch(scoreURL);
  const likesdata = await response.json();



}

export { addLike, getLike };