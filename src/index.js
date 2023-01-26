import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'aos/dist/aos.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './views/layouts/main';
import EmptyLayout from './views/layouts/empty-layout';

import Home from './views/home';
import HighPerformance from './views/includes/high-performance';
import DistributedDashboard from './views/includes/distributed-dashboard';
import Support from './views/includes/support';
import EPrepaid from './views/products/e-prepaid';
import SmartHome from './views/products/smarthome';
import EasySolar from './views/products/easysolar';
import WaakyeLocator from './views/products/waakyelocator';
import Printablly from './views/products/printablly';

import AboutUs from './views/corporate/about-us';
import History from './views/corporate/history';
import Team from './views/corporate/team';
import BoardOfDirectors from './views/corporate/board-of-directors';
import Customers from './views/corporate/customers';
import Partners from './views/corporate/partners';

import TheOriginVision from './views/kane-mani/the-origgin-vision';
import A100BillionDollarCompany from './views/kane-mani/a-100-billion-dollar-company';

import Login from './views/auth/login';
import SignUp  from './views/auth/signup';

import Rope from './views/products/rope';

import Solutions from './views/solutions';
import NotFound from './views/not-found';
import TechEducation from './views/products/techEducation';

import BecomeAPartner from './views/resources/become-a-partner';
import SupportCenter from './views/resources/support-center';
import CustomerStories from './views/resources/customer-stories';

import StartUp from './views/resources/startup';
import Growth from './views/resources/growth';
import Enterprise from './views/resources/enterprise';

import MarketPlace from './views/resources/marketplace';

import Blog from './views/resources/blog';
import TheOriginMasterPlan from './views/kane-mani/the-origgin-masterplan';
import Careers from './views/corporate/careers';
import Contact from './views/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "resources/blog",
        element: <Blog />
      },
      {
        path: "resources/customer-stories",
        element: <CustomerStories />,
        children: [
          {
            path: "enterprise",
            element: <Enterprise />
          },
          {
            path: "growth",
            element: <Growth />
          },
          {
            index: true,
            element: <MarketPlace />,
            name: "marketPlace"
          },
          {
            index: true,
            element: <StartUp />,
            name: "startup"
          }
        ]
      },
      {
        path: "resources/support-center",
        element: <SupportCenter />
      },
      {
        path: "resources/become-a-partner",
        element: <BecomeAPartner />
      },
      {
        path: "products/tech-education",
        element: <TechEducation />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "solutions",
        element: <Solutions />
      },
      {
        path: "products/cloud-services/rope",
        element: <Rope />
      },
      {
        path: "kane-mani/the-origgin-masterplan",
        element: <TheOriginMasterPlan />
      },
      {
        path: "kane-mani/a-$100-billion-company",
        element: <A100BillionDollarCompany />
      },
      {
        path: "kane-mani/the-origgin-vision",
        element: <TheOriginVision />
      },
      {
        path: "company/careers",
        element: <Careers />
      },
      {
        path: "company/partners",
        element: <Partners />
      },
      {
        path: "company/customers",
        element: <Customers />
      },
      {
        path: "company/board-of-directors",
        element: <BoardOfDirectors />
      },
      {
        path: "company/team",
        element: <Team />
      },
      {
        path: "company/history",
        element: <History />
      },
      {
        path: "company/about-us",
        element: <AboutUs />
      },
      {
        path: "products/consumer-internet/printablly",
        element: <Printablly />
      },
      {
        path: "products/consumer-internet/waakye-locator",
        element: <WaakyeLocator />
      },
      {
        path: "products/energy/easysolar",
        element: <EasySolar />
      },
      {
        path: "products/energy/smarthome",
        element: <SmartHome />
      },
      {
        path: "products/energy/e-prepaid",
        element: <EPrepaid />
      },
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <HighPerformance />,
          },
          {
            path: "high-performance",
            element: <HighPerformance />
          },
          {
            path: "distributor-dashboard",
            element: <DistributedDashboard />
          },
          {
            path: "support",
            element: <Support />
          }
        ]
      },
    ],
    
  },
  {
    path: "/",
    element: <EmptyLayout />,
    children: [
      {
        path: "sign-up/business",
        element: <SignUp />
      },
      {
        path: "sign-up/individual",
        element: <SignUp />
      },
      {
        path: "login/individual",
        element: <Login />
      },
      {
        path: "login/business",
        element: <Login />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
