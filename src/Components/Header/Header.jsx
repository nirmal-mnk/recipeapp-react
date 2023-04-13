export default function Header() {
  return (
    <div className="w-100 sticky-top px-3 py-3 bg-black d-flex justify-content-between align-items-center">
      <div className="w-25">
        <h1 className="logo">Cookify</h1>
      </div>
      <div className="w-75 text-end">
        <ul>
          <li className="d-inline-block">
            <a className="px-3" href="#">
              Home
            </a>
          </li>
          <li className="d-inline-block">
            <a className="px-3" href="#">
              Recipes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
