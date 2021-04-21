const container = document.getElementById('container');
const count = 50;
const fetchPhotos = async () => {
  for(let i = 1; i <= count; i++) {
    await getPhotos(i);
  }
}

const getPhotos = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const finalResponse = await response.json();
    createPhotoCard(finalResponse);
  }

const createPhotoCard = (photo) => {
  const card = document.createElement('div');
  card.classList.add('col');
  const name = photo.name.toUpperCase();

  const photoInnerHTML = ` 
<div class="card">
  <img src="https://pokeres.bastionbot.org/images/pokemon/${photo.id}.png" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>   
  </div>
</div>`
  card.innerHTML = photoInnerHTML;
  container.appendChild(card);

}
document.getElementById('showPhoto').onclick = fetchPhotos;
