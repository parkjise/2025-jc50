const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "LOADING...";
    animeNameEl.innerText = "Updating...";
    // const response = await fetch("https://api.catboys.com/img");
    const ACCESS_KEY = "0ysFNK27HS7XWt6pV-YDvLsHNyVf30Z23CYIcd6h9fE";
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    );
    const data = await response.json();
    const imageUrl = data.urls.full;
    btnEl.disabled = false;
    btnEl.innerText = "GET Anime...";
    animeContainerEl.style.display = "block";
    // animeImgEl.src = data.url;
    animeImgEl.src = imageUrl;
    animeNameEl.innerText = data.user.name;
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerText = "GET Anime...";
    animeNameEl.innerText = "An error happened please try again";
  }
});
