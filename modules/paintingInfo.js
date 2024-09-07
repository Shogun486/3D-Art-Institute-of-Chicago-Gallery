export const displayPaintingInfo = (info) => {
  const infoElement = document.getElementById('painting-info'); 

  infoElement.innerHTML = `
    <h3><i>${info.title}</i></h3>
    <p><u>Artist</u></p>
    <p>${info.artist}</p>
    <br/>
    <p><u>Description</u></p>
    <p> ${info.description}</p>
    <br/>
    <p><u>Year & Place</u></p>
    <p>In ${info.location} during ${info.year}</p>
  `;
  infoElement.classList.add('show'); 
};

export const hidePaintingInfo = () => {
  const infoElement = document.getElementById('painting-info'); 
  infoElement.classList.remove('show');
};

