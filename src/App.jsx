import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PracticePage from "./PracticePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice/:id" element={<PracticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
