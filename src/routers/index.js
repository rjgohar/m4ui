import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route
          path="/About-us"
          element={
            
           
          }
        /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
