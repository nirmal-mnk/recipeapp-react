import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkModal } from "../../Features/Reducers/ModalReducer";
import { useEffect } from "react";
export default function Modal() {
  const dispatch = useDispatch();
  const recipe = useSelector(
    (state) => state.rootReducer.modalState.viewRecipe
  );
  useEffect(() => {
    console.log(recipe);
  }, [recipe]);
  function toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  }
  return ReactDOM.createPortal(
    <div
      className={styles.modalMain}
      onClick={() => dispatch(checkModal(false))}
    >
      <div className={styles.modalCard}>
        <div className={styles.modalCardImage}>
          <img src={recipe.image} alt="" />
        </div>
        <div className={styles.modalCardContent}>
          <h3 className="my-3">{toPascalCase(recipe.label)}</h3>
          <h5>Ingredients</h5>
          <div className={styles.ingredientMain}>
            <ul className={styles.ingredientList}>
              {recipe.ingredientLines.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
