const imagesApi = "NWBaV3jTf9mEbAcSdbHsybxNS6OLOu4wUcjZGl0qrOesDBeA8800Bl5k";
const firstImagesUrl = "https://api.pexels.com//search?query=hamsters";
const secondImagesUrl = "https://api.pexels.com/v1/search?query=tigers";

const getImages = () => {
  fetch("https://api.pexels.com//search?query=hamsters", {
    headers: {
      Authorization: imagesApi,
    },
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.JSON;
      } else {
        throw new Error("errore nella risposta");
      }
    })
    .then((imagesData) => {
      createCardWhitImages(imagesData);
      console.log(imagesData);
    })
    .catch((err) => {
      console.log("error", err);
    });
};

getImages();
