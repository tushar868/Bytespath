import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";

import AboutUs from "./pages/company/AboutUs";
import Leadership from "./pages/company/Leadership";
import Overview from "./pages/company/Overview";

import AITechnology from "./pages/services/AITechnology"
import ARVRTechnology from './pages/services/ARVRTechnology';
import CloudHosting from './pages/services/CloudHosting';
import CyberSecurity from './pages/services/CyberSecurity';
import ManagedITSecurityServices from './pages/services/ManagedITSecurityServices';
import ITBusinessConsulting from './pages/services/ITBusinessConsulting';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import VFXCGI from './pages/services/VFXCGI';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';

import AerospaceAndDefence from './pages/industries/AerospaceAndDefence';
import Education from './pages/industries/Education';
import FinanceAndBanking from './pages/industries/FinanceAndBanking';
import HealthCare from './pages/industries/HealthCare';
import IT from './pages/industries/IT';
import LogisticAndTransport from './pages/industries/LogisticAndTransport';
import Manufacturing from './pages/industries/Manufacturing';
import MediaEntertainment from './pages/industries/MediaEntertainment';
import RealEstate from './pages/industries/RealEstate';
import RetailAndEcommerce from './pages/industries/RetailAndEcommerce';

import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Investor from "./pages/Investor";
import ContactUs from "./pages/ContactUs";

import "./App.css";

import ScrollToTop from './components/ScrollToTop';  



const App = () => {
  return (
    <>
      <Preloader />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/about-us" element={<AboutUs />} />
        <Route path="/company/leadership" element={<Leadership />} />
        <Route path="/company/overview" element={<Overview />} />

        <Route path="/services/ai-technology" element={<AITechnology />} />
        <Route path="/services/ar-vr-technology" element={<ARVRTechnology />} />
        <Route path="/services/cloud-hosting" element={<CloudHosting />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/managed-it-security-services" element={<ManagedITSecurityServices />} />
        <Route path="/services/it-business" element={<ITBusinessConsulting />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/vfx-cgi" element={<VFXCGI />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />

        <Route path="/industries/aerospace-defence" element={<AerospaceAndDefence />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/finance-banking" element={<FinanceAndBanking />} />
        <Route path="/industries/health-care" element={<HealthCare />} />
        <Route path="/industries/it" element={<IT />} />
        <Route path="/industries/logistic-transport" element={<LogisticAndTransport />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/retail-ecommerce" element={<RetailAndEcommerce />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
