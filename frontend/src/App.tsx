import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/landing";
import { Room } from "./components/room";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
