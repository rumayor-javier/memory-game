import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { GamePage, SummaryPage } from "../pages";

export const GameRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/game" element={<GamePage />} />
          <Route path="/summary" element={<SummaryPage />} />

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
