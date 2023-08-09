import Home from "./pages/Home";
import ReactDOM from "react-dom";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}
