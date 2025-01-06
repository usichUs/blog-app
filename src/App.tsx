import { Home } from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { PostPage } from "./pages/PostPage.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
