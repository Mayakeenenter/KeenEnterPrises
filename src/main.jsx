import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { useEffect } from "react"; // أضيفي هذا السطر في الأعلى
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./assets/pages/Home/Home.jsx";
import Products from "./assets/pages/Products/Products.jsx";
import Service from "./assets/pages/Service/Service.jsx";
import AboutUs from "./assets/pages/AboutUs/AboutUs.jsx";
import ContactUs from "./assets/pages/ContactUs/ContactUs.jsx";
import Ziwo from "./assets/pages/Ziwo/Ziwo.jsx";
import AppWrapper from "./assets/component/AppWrapper/AppWrapper.jsx";
import NavBar from "./assets/component/NavBar/NavBar.jsx";
import Footer from "./assets/component/Footer/Footer.jsx";
import InformationBitrix24 from "./assets/pages/InformationBitrix24/InformationBitrix24.jsx";
import PropertyFinder from "./assets/pages/PropertyFinder/PropertyFinder .jsx";
import PartnerPage from "./assets/pages/Partner/Partner.jsx";
import Ai from "./assets/pages/Ai/Ai.jsx";

const RootLayout = () => {
  // useEffect(() => {
  //   // منع تحميل السكربت أكثر من مرة
  //   if (document.getElementById("vapi-widget")) return;

  //   const script = document.createElement("script");
  //   script.src =
  //     "https://cdn.jsdelivr.net/gh/VapiAI/html-widget@latest/dist/vapi-widget.js";
  //   script.defer = true;
  //   script.id = "vapi-widget";

  //   script.onload = () => {
  //     if (window.vapiSDK) {
  //       window.vapiSDK.run({
  //         apiKey: "15b0eef6-7609-4811-b964-18f470c60d57",
  //         assistantId: "10c3c245-4a01-46b2-a48d-743882870367",
  //         config: {
  //           title: "مساعد Keen Enterprises",
  //           color: "#000000",
  //         },
  //       });
  //     }
  //   };

  //   document.body.appendChild(script);
  // }, []);

  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/informationBitrix24", element: <InformationBitrix24 /> },
      {
        path: "/bitrix",
        element: <Products />,
      },
      {
        path: "/ziwo",
        element: <Ziwo />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/propertyfinder",
        element: <PropertyFinder />,
      },
      {
        path: "/partner",
        element: <PartnerPage />,
      },
      {
        path: "/ai",
        element: <Ai />,
      },
    ],
  },
]);

/* =======================
   Render App
======================= */
createRoot(document.getElementById("root")).render(
  <AppWrapper router={router} />
);
