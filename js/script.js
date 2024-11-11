import peliculas from "./peliculas.js";

let developflix = () => {
  let accion = document.getElementById("genero-28");
  let thriller = document.getElementById("genero-53");
  let aventura = document.getElementById("genero-12");
  let accionMovies = [];
  accionMovies = peliculas
    .filter((movie) => movie.genre_ids.includes(28))
    .map((movie) => movie.poster_path && movie.title);
  accion.innerHTML = accionMovies;

  let thrillerMovies = [];
  thrillerMovies = peliculas
    .filter((movie) => movie.genre_ids.includes(53))
    .map((movie) => movie.title);
  thriller.innerHTML = thrillerMovies;

  let aventuraMovies = [];
  aventuraMovies = peliculas
    .filter((movie) => movie.genre_ids.includes(12))
    .map((movie) => movie.title);
  aventura.innerHTML = aventuraMovies;
};
developflix();
