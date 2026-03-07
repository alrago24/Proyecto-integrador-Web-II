import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from "./App1";
import Login from "./components/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App1 />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}