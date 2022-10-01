import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Community from "../pages/community";

import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {<Route path="/" element={<Home />} />}

          {<Route path="/community" element={<Community />} />}
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
