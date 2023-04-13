export default function Loader() {
  return (
    <div className="loader">
      <div className="loadercss">
        <img
          src={require("../../Assets/Images/loading-gif.webp")}
          alt="Loader"
        />
      </div>
    </div>
  );
}
