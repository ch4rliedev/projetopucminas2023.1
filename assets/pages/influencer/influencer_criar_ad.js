let titulo = document.querySelector("#titulo");
let descAnuncio = document.querySelector("#descAnuncio");
let valor = document.querySelector("#valor");
let tiktok = document.getElementById("tiktok");
let instagram = document.querySelector("#instagram");
let youtube = document.querySelector("#youtube");

function fazerAnuncio() {
  let listAnuncioInfluencer = JSON.parse(localStorage.getItem("listAnuncioInfluencer") || "[]");

  checarCheckbox();

  listAnuncioInfluencer.push({
    titulo: titulo.value,
    descAnuncio: descAnuncio.value,
    valor: valor.value,
    tiktok: tiktok.value,
    instagram: instagram.value,
    youtube: youtube.value,
  })

  localStorage.setItem('listAnuncioInfluencer', JSON.stringify(listAnuncioInfluencer))

  alert('Anúncio feito com sucesso')
}

function checarCheckbox() {
  if (tiktok.checked) {
    tiktok.value = 1;
  } else {
    tiktok.value = 0;
  }

  if (instagram.checked) {
    instagram.value = 1;
  } else {
    instagram.value = 0;
  }

  if (youtube.checked) {
    youtube.value = 1;
  } else {
    youtube.value = 0;
  }
}
