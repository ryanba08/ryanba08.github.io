import Home from "./pages/Home";
import ReactDOM from "react-dom";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/ryanba08.github.io" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}
