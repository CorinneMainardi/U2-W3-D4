const imagesApi = "NWBaV3jTf9mEbAcSdbHsybxNS6OLOu4wUcjZGl0qrOesDBeA8800Bl5k";
const firstImagesUrl = "https://api.pexels.com/v1/search?query=hamsters";
const secondImagesUrl = "https://api.pexels.com/v1/search?query=tigers";
const genericUrl = "https://api.pexels.com/v1/search?query=";

const firstBtn = document.getElementById("firstBtn");
const secondBtn = document.getElementById("secondBtn");
let isHamsters;
let query;

const getImages = (query) => {
  fetch(genericUrl + query, {
    headers: {
      Authorization: imagesApi,
    },
  })
    .then((response) => {
      if (response.ok) {
        // console.log("response", response);
        return response.json();
      } else {
        throw new Error("errore nella richiesta");
      }
    })
    .then((data) => {
      console.log(data);
      changeImg(data); //funzione scritta sotto
    })
    .catch((err) => {
      console.log(err);
    });
};

const changeImg = (data) => {
  const imgDiv = document.querySelectorAll("img");
  imgDiv.forEach((img, i) => {
    img.src = data.photos[i].src.portrait;
  });
};

firstBtn.addEventListener("click", getImages("hamsters"));
firstBtn.addEventListener("click", getImages("tigers"));
