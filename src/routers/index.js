import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/aboutUs";
import Wrapper from "../units/wrapper";
import UniversalDialogs from "../UniversalDialogs";
import Footer from "../component/footer";
import Header from "../component/header";
import Nft from "../pages/nft";
import Market from "../pages/Market";

import Home from "../pages/home";

import FooterEndSection from "../component/pageEndSection";
import Blog from "../pages/blog";
import Artifact from "../pages/artifact";

import FeatureArtist from "../pages/featureArtist";
import Faq from "../pages/Faqs";

const Routers = () => {
  return (
    <Router>
      <UniversalDialogs />
      <Header />
      <Routes>
        <Route
          path="/About-us"
          element={
            <Wrapper>
              <AboutUs />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/faqs"
          element={
            <Wrapper>
              <Faq />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/market"
          element={
            <Wrapper>
              <Market />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/nft"
          exact
          element={
            <Wrapper>
              <Nft />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/"
          exact
          element={
            <Wrapper>
              <Home />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/Blog"
          element={
            <Wrapper>
              <Blog />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/Artifact"
          element={
            <Wrapper>
              <Artifact />
              <FooterEndSection />
            </Wrapper>
          }
        />
        <Route
          path="/feature-artist"
          element={
            <Wrapper>
              <FeatureArtist />
              <FooterEndSection />
            </Wrapper>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
