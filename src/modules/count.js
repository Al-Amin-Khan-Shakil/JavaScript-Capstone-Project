const commentsCount = () => {
  const comments = document.querySelectorAll('.comments');
  return comments.length;
};

const itemsCount = async () => {
  const sourceURL = 'https://api.tvmaze.com/seasons/1/episodes';

  const data = await fetch(sourceURL);
  const json = await data.json();
  return json;
};
export { commentsCount, itemsCount };