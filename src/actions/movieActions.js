export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "film ekle";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
export const addMovie = (movie) => {
  movie.id = Date.now();
  return { type: ADD_MOVIE, payload: movie };
};
