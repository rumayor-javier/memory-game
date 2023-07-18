import { Route, Routes } from "react-router-dom";
import { HomePage } from "../auth/pages";
import { GameRoutes } from "../game";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<GameRoutes />} />
      </Routes>
    </>
  );
};
