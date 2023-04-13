import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import {
  checkModal,
  clickedRecipe,
} from "../../Features/Reducers/ModalReducer";
export default function Card(props) {
  const dispatch = useDispatch();
  const handleRecipeClick = (recipe) => {
    dispatch(checkModal(true));
    dispatch(clickedRecipe(recipe));
  };
  return (
    <div
      className={styles.cardMain}
      onClick={() => handleRecipeClick(props.card.recipe)}
    >
      <div className={styles.cardSub}>
        <div className={styles.cardImage}>
          <img src={props.card.recipe.image} alt="" />
        </div>
        <div className={styles.cardDet}>
          <h1 className={styles.title}>{props.card.recipe.label}</h1>
          <div className={styles.cardsubdet}>
            <p className={styles.cookingTime}>
              Time - {props.card.recipe.totalTime}
            </p>
            <p className={styles.cookingTime}>
              Calories - {Math.round(props.card.recipe.calories)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
