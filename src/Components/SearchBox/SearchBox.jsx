import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { gettingAllData } from "../../Features/Reducers/RecipeReducer";
export default function SearchBox() {
  const isError = useSelector(
    (state) => state.rootReducer.recipeState.isRejected
  );

  const dispatch = useDispatch();
  const [searchval, setSearchVal] = useState("Biriyani");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchVal("");
    dispatch(gettingAllData(searchval));
  };
  return (
    <div className="text-center my-5 container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className={styles.globalSearch}
          placeholder="Search Something..."
          value={searchval}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </form>
      {isError && <p className={styles.error}>Recipe Not Exists</p>}
    </div>
  );
}
