import { Routes, Route } from "react-router-dom";
import { App } from "./pages/index";

export function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
  );
}
