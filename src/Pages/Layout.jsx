import Banner from "../Components/Banner/Banner";
import SearchBox from "../Components/SearchBox/SearchBox";
import Header from "../Components/Header/Header";
import { useEffect } from "react";
import Card from "../Components/Card/Card";
import Top10 from "../Components/Top10/Top10";
import { useDispatch, useSelector } from "react-redux";
import { gettingAllData } from "../Features/Reducers/RecipeReducer";
import Modal from "../Components/Modal/Modal";
import Loader from "../Components/Loader/Loader";
import { useRef } from "react";

export default function Layout() {
  const data = useSelector(
    (state) => state.rootReducer.recipeState.allRecipe.hits
  );
  const loader = useSelector(
    (state) => state.rootReducer.recipeState.isloading
  );
  const showResult = useSelector(
    (state) => state.rootReducer.recipeState.showResult
  );
  const modal = useSelector((state) => state.rootReducer.modalState.isModal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingAllData("poori"));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const recipesRef = useRef(null);
  useEffect(() => {
    console.log(showResult);
    // if (showResult) {
    //   window.scrollTo({
    //     top: recipesRef.current.offsetTop - 120,
    //     behavior: "smooth",
    //   });
    // } else {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // }
  }, [showResult]);
  return (
    <div>
      {modal && <Modal />}
      {loader && <Loader />}
      <Header />
      <Banner />
      <SearchBox />
      <Top10 />
      <h1 className="text-center mt-3" ref={recipesRef}>
        Recipes
      </h1>
      <div className="container d-flex justify-content-center align-items-center flex-wrap">
        {data?.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
