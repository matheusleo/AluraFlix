const nameInput = document.querySelector("#name");
const bannerInput = document.querySelector("#banner");
const listBanner = document.querySelector("#list-banner");

const buttonAdicionar = document
  .querySelector("#add-button")
  .addEventListener("click", organizeNameAndBanner);

function organizeNameAndBanner() {
  const movie = {
    name: nameInput.value,
    banner: bannerInput.value,
  };
  const nameAndBanner = `
    <figure class="wrapper-banner">
        <img class="main-banner" src=${movie.banner} alt=${movie.name}>
        <figcaption class="main-caption">${movie.name}</figcaption>
    </figure>`;

  listBanner.insertAdjacentHTML("beforeend", nameAndBanner);
}

//Criar function que modifica o nome do banner
//para inserir ele corretamente dentro do alt da tag <img>
