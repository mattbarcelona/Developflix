import peliculas from "./peliculas.js";
let accion = document.getElementById("genero-28");
let thriller = document.getElementById("genero-53");
let aventura = document.getElementById("genero-12");

const imageBase = "https://image.tmdb.org/t/p/w500";

let accionMovies = peliculas
  .filter((movie) => movie.genre_ids.includes(28))
  .map((movie) => ({
    poster_path: imageBase.concat(movie.poster_path),
    title: movie.title,
  }));
console.log(accionMovies);

let thrillerMovies = peliculas
  .filter((movie) => movie.genre_ids.includes(53))
  .map((movie) => ({
    poster_path: imageBase.concat(movie.poster_path),
    title: movie.title,
  }));
console.log(thrillerMovies);

let aventuraMovies = peliculas
  .filter((movie) => movie.genre_ids.includes(12))
  .map((movie) => ({
    poster_path: imageBase.concat(movie.poster_path),
    title: movie.title,
  }));
console.log(aventuraMovies);

function orderMovies(pelicula, genList) {
  pelicula.forEach((element) => {
    const divGen = document.createElement("div");
    const titleGen = document.createElement("h3");
    titleGen.textContent = element.title;
    titleGen.classList.add("title");

    const imgGen = document.createElement("img");
    imgGen.src = element.poster_path;
    imgGen.alt = element.title;

    divGen.appendChild(titleGen);
    divGen.appendChild(imgGen);

    genList.appendChild(divGen);
  });
}
orderMovies(accionMovies, accion);
orderMovies(thrillerMovies, thriller);
orderMovies(aventuraMovies, aventura);
