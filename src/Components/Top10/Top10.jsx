import styles from "../Top10/Top10.module.css";
import { healthyFoods } from "../../Data/data";
import { useDispatch } from "react-redux";
import { gettingAllData } from "../../Features/Reducers/RecipeReducer";

export default function Top10() {
  const dispatch = useDispatch();

  return (
    <div className="my-5">
      <h1 className="text-center">Top 10 Healiest food</h1>
      <div className="container">
        <div className="row justify-content-center flex-wrap">
          {healthyFoods.map((recipe, index) => (
            <div key={index} className={`col-2 ${styles.top10Cards}`}>
              <div
                className={styles.top10CardsSub}
                onClick={() => dispatch(gettingAllData(recipe.query))}
              >
                <img src={recipe.image} alt="" />
                <h3>{recipe.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
