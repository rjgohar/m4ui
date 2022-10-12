import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Blogs from "../pages/blogs";
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
          {<Route path="/blogs" element={<Blogs />} />}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
