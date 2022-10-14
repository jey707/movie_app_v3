import { HashRouter, Routes, Route } from "react-router-dom";
import Movie_list from "./component/Movie_list";
import Home from "./routes/Home";
import Header from "./component/Header";
import "./css/reset.css";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
