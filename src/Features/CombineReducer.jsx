import { combineReducers } from "redux";
import recipeReducer from "./Reducers/RecipeReducer";
import ModalReducer from "./Reducers/ModalReducer";

const rootReducer = combineReducers({
  recipeState: recipeReducer,
  modalState: ModalReducer,
});

export default rootReducer;
