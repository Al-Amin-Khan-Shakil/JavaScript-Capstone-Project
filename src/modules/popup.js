
//* ----------------API-Fetch Function-----------//
  
const overlay = document.querySelector('#popup');
function createModal(item,comment) {
  const sampleTemplateModal = `
  <div class="modal-work">
  <div class="Imgname">
  <i class="fa fa-close data-close-button"></i>  
 </div>
<div class="item-info">
  <img src="${item.image.original}" alt="" class="main-img">
  <h2 class="item-name">${item.name}</h2>
 </div>
 <div class="info1">
 ${item.summary} 
 </div>
 <div class="info2">
 <h2>Air date:${item.airdate} </h2>
 <h2>Air time:${item.airtime} </h2>
 </div>
 </div>
 <h2>comment${comment}</h2>
 <ul class="comment">
 </ul>
 <form>
        <input type="text" name="name" class="name-"  placeholder="Your name" required/></div>
        <textarea  name="message" class="message" rows="6" maxlength="50" placeholder="Enter your commet here..." required></textarea></div>
        <button type="submit" class="btn ">Commet</button>
</form>
`;

  return sampleTemplateModal;
}

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }
  
  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
   const buttonEventListener= async (id) => {
        try {
            const res = await fetch(`https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=${id}`);
            if (res.status !== 200) throw new Error('Error fetching data');
            const data = await res.json();
         const modal = createModal(data);
      const element = document.createElement('div');
      element.innerHTML = modal;
      element.classList.add('modal');
      const addElement = document.getElementById('popup');
      addElement.after(element);
      openModal(element);
      const closePopButtons = document.querySelectorAll('.data-close-button');
      closePopButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          closeModal(modal);
        });
      });
    } 
    catch (err) {
            return err;
   }
};
 
export default buttonEventListener;
  