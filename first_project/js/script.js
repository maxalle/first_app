let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", ""),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };
    const a = prompt("Последний просмотренный фильм?", ""),
          b = prompt("Насколько вы его оцениваете?", "");
    personalMovieDB.movies[a] = b;
    


console.log(numberOfFilms);
console.log(personalMovieDB);