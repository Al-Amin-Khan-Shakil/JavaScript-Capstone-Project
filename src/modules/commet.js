const apiId = 'MEyKHZs5GQJjgTbCoZJe';// 3P9ifz6JhS0AXCdTzxPo
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiId}/comments`;

//* ----------------comment API-Fetch Function-----------//
const fetchcomment = async (itemId) => {
  try {
    const res = await fetch(`${url}?item_id=${itemId}`);
    if (!res.ok) throw new Error('Cannot get comment for id ', itemId);
    const data = await res.json();
    const list = document.querySelector('.comment-list');
    list.innerHTML = '';
    data.forEach((item) => {
      const commentEl = document.createElement('li');
      commentEl.classList.add('comment-item');
      commentEl.innerHTML = `
                <h3> ${item.creation_date}  ${item.username}: ${item.comment}</h3>
           `;
      document.querySelector('.comment-list').appendChild(commentEl);
    });
    document.querySelector('.comments-title').innerHTML = `comment ( ${data.length} )`;
    return res;
  } catch (err) {
    return err;
  }
};

// *------------------Score AddFunction---------------------//
const addcomment = async (id, userName, comment) => {
  try {
    const res = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: userName,
          comment,
        }),
      });
    if (!res.ok) throw new Error('Error creating comment for id ', id);
    return res;
  } catch (err) {
    return err;
  }
};

export {
  addcomment, fetchcomment,
};