const Movies = () => {
  const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 }
  ];

  // Return movies in 2018
  // Sort by rating
  // Descending order
  // Pick their title

  const getMovies = movies => {
    let filteredMovies = movies.filter(movie => movie.year === 2018 && movie.rating >= 4);

    filteredMovies.sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return 0;
    });

    console.log(filteredMovies);
    const newList = [];
    for (const movie of filteredMovies) {
      console.log(movie);
      newList.push(movie.title);
    }

    return newList;
  };

  // MOSH SOLTUION rewritten

  const movies2 = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 }
  ];

  const newMovies2 = movies2
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(movie => movie.title);

  console.log(movies);
  console.log(getMovies(movies));
  console.log(newMovies2);
};

export default Movies;
