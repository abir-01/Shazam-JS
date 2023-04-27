import addRemoveFavourite from "./favourites";
import addRemovePlaylists from "./playlists";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addRemoveFavourite,
    addRemovePlaylists
})

export default rootReducer;