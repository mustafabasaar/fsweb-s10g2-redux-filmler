import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [
    {
      id: 10,
      title: "The CodeMother",
      director: "Francis Ford Coppola",
      metascore: 100,
      genre: "Drama",
      description:
        "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.",
    },
  ],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };

    case REMOVE_FAVORITE:
      const newState = {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
      return newState;

    case ADD_FAVORITE:
      const checkExisting = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (checkExisting) {
        return state;
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    default:
      return state;
  }
};

export default reducer;
