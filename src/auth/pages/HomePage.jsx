import { useNavigate } from "react-router-dom";
import "animate.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/game", { replace: true });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col">
        <div className="row text-center mt-5">
          <h1 className="animate__animated animate__fadeInDown">
            Memory Game 🧠
          </h1>
        </div>
        <div className="row mt-5">
          <button
            className="btn btn-primary animate__animated animate__animated animate__fadeInUp"
            onClick={onLogin}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
