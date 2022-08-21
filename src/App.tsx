import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
