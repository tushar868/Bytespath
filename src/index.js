import React from "react";
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import reportWebVitals from './reportWebVitals';
import './App.css'; 
import App from './App'; 

import AboutUs from './pages/company/AboutUs'; 
import Leadership from "./pages/company/Leadership";
import Overview from "./pages/company/Overview";

import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Investor from "./pages/Investor";
import ContactUs from "./pages/ContactUs";

import AITechnology from "./pages/services/AITechnology";
import ARVRTechnology from "./pages/services/ARVRTechnology";
import CloudHosting from "./pages/services/CloudHosting";
import CyberSecurity from "./pages/services/CyberSecurity";
import ManagedITSecurityServices from "./pages/services/ManagedITSecurityServices";
import ITBusinessConsulting from "./pages/services/ITBusinessConsulting";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import VFXCGI from "./pages/services/VFXCGI";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";

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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "/company/about-us", element: <AboutUs /> },
      { path: "/company/leadership", element: <Leadership /> },
      { path: "/company/overview", element: <Overview /> },

      { path: "/services/ai-technology", element: <AITechnology /> },
      { path: "/services/ar-vr-technology", element: <ARVRTechnology /> },
      { path: "/services/cloud-hosting", element: <CloudHosting /> },
      { path: "/services/cyber-security", element: <CyberSecurity /> },
      { path: "/services/managed-it-security-services", element: <ManagedITSecurityServices /> },
      { path: "/services/it-business", element: <ITBusinessConsulting /> },
      { path: "/services/mobile-app-development", element: <MobileAppDevelopment /> },
      { path: "/services/software-development", element: <SoftwareDevelopment /> },
      { path: "/services/vfx-cgi", element: <VFXCGI /> },
      { path: "/services/website-development", element: <WebsiteDevelopment /> },

      { path: "/industries/aerospace-defence", element: <AerospaceAndDefence /> },
      { path: "/industries/education", element: <Education /> },
      { path: "/industries/finance-banking", element: <FinanceAndBanking /> },
      { path: "/industries/health-care", element: <HealthCare /> },
      { path: "/industries/it", element: <IT /> },
      { path: "/industries/logistic-transport", element: <LogisticAndTransport /> },
      { path: "/industries/manufacturing", element: <Manufacturing /> },
      { path: "/industries/media-entertainment", element: <MediaEntertainment /> },
      { path: "/industries/real-estate", element: <RealEstate /> },
      { path: "/industries/retail-ecommerce", element: <RetailAndEcommerce /> },
      

      { path: "/careers", element: <Careers /> },
      { path: "/partners", element: <Partners /> },
      { path: "/investor", element: <Investor /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
  {
    
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} /> 
    <a
      href="https://wa.me/+918484871810"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a>
  </React.StrictMode>
);

reportWebVitals();
