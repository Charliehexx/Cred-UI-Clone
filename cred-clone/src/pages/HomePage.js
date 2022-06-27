import React from 'react'
import HeroSection from "../components/HeroSection/HeroSection.js";
import Header from "../components/common/Header/Header.js";
import ProductShowCase from "../components/ProductShowCase/ProductShowCase.js";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial.js";
import CredExperience from "../components/CredExperience/CredExperience.js";
import CredSecurity from "../components/CredSecurity/CredSecurity.js";
import BrandsLove from "../components/BrandsLove/BrandsLove";
import Window from "../components/Window/Window";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import CredStory from "../components/CredStory/CredStory";
import AppRating from "../components/AppRating/AppRating";
import Footer from "../components/common/Footer/Footer";

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ProductShowCase/>
    <FeelSpecial/>
    <BrandsLove/>
    <CredExperience/>
    <MobileScroll/>
     <div className="non-mobile">
        <Window/>
      </div>
    <CredSecurity/>
    <CredStory/>
     <AppRating />
      <Footer />
</>

  )
}

export default HomePage