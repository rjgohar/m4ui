import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";

import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>{<Route path="/" element={<Home />} />}</Routes>
      </Router>
    </>
  );
};

export default Routers;
