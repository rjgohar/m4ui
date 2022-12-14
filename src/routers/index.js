import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommunityHeader from "../components/communityHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Blogs from "../pages/blogs";
import Community from "../pages/community";

import Home from "../pages/home";
import Issue from "../pages/issuse";
import Login from "../pages/login";
import Signup from "../pages/signup";

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
                <Footer />
              </Layout>
            }
          />
          {
            <Route
              path="/community"
              element={
                <Layout header={<CommunityHeader />}>
                  <Community />
                  <Footer />
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
                  <Footer />
                </Layout>
              }
            />
          }
          {
            <Route
              path="/issue"
              element={
                <Layout header={<Header />}>
                  <Issue />
                  <Footer />
                </Layout>
              }
            />
          }
          {
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
          }
          {
            <Route
              path="signup"
              element={
                <Layout>
                  <Signup />
                </Layout>
              }
            />
          }
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
