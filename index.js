const imgs = [
  "https://image.geo.de/30138026/t/pu/v3/w1440/r1/-/lenzen-geo-tag-der-natur-jpg--78476-.jpg",
  "https://www.fotowissen.eu/wp-content/uploads/2022/09/raus-in-die-natur-fotografieren-titelbild-7.jpg",
  "https://cdn.pixabay.com/photo/2015/06/23/14/33/natur-818749_640.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20170821_Iguaz%C3%BA-Wasserf%C3%A4lle_%28Brasilien%29.jpg/1200px-20170821_Iguaz%C3%BA-Wasserf%C3%A4lle_%28Brasilien%29.jpg",
  "https://szm-media.sueddeutsche.de/image/szm/93cb43622718d7e1f45968742dd60ae7/640/image.jpeg",
];

const img = document.getElementById("cart");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const auto = document.getElementById("auto");
let imgIndex = 0;
function nextImg() {
  imgIndex++;
  if (imgIndex >= imgs.length) {
    imgIndex = 0;
  }
  img.src = imgs[imgIndex];
}
function prevImg() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgs.length - 1;
  }
  img.src = imgs[imgIndex];
}
let autoInt;
function autoImg() {
  autoInt = setInterval(nextImg, 3000);
}
next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);
auto.addEventListener("click", autoImg);
