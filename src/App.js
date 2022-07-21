
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/components/Footer/Footer";

import Home from "./pages/Home/Home";
import Aboutus from "./pages/Home/components/Aboutus/Aboutus";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
