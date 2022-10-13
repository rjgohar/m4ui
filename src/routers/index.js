import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommunityHeader from "../components/communityHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Blogs from "../pages/blogs";
import Community from "../pages/community";

import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout header={<Header />}>
                <Home />
              </Layout>
            }
          />
          {
            <Route
              path="/community"
              element={
                <Layout header={<CommunityHeader />}>
                  <Community />
                </Layout>
              }
            />
          }
          {
            <Route
              path="/blogs"
              element={
                <Layout header={<CommunityHeader />}>
                  <Blogs />
                </Layout>
              }
            />
          }
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
