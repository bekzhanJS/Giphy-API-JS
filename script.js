const btn = document.getElementById("btn");

let generate = () => {
  const API = "e8sda3cothhKwTUjeRf2nRjMJ1slnoS5";
  const input = document.getElementById("input").value;
  const show = document.getElementById("show");

  let URL = `http://api.giphy.com/v1/gifs/search?api_key=${API}&limit=20&q=${input}$limit=20&rating=g`;

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      let gifs = result.data;
      console.log(gifs);

      show.innerHTML = "";

      gifs.forEach((gif) => {
        let img = document.createElement("img");
        img.setAttribute("src", gif.images.downsized_medium.url);

        show.append(img);
        console.log(show);
      });
    })``.catch((error) => {
    console.error(error);
  });
};

btn.addEventListener("click", generate);
window.addEventListener("load", generate);
