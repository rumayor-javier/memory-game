import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">
      <Link className="navbar-brand" to="/game">
        Memory Game
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/game">
            Play
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Home
          </button>
        </ul>
      </div>
    </nav>
  );
};
