import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import MenuSection from './pages/MenuSection.jsx';
import Contact from './pages/Contact.jsx';
import Pages from './pages/Pages.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/menu',
        element: <MenuSection></MenuSection>
      },

      {
        path: '/pages',
        element:<Pages></Pages>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
        path: '/login',
        element:<LoginPage></LoginPage>
      },

          {
        path: '/regi',
        element:<RegistrationPage></RegistrationPage>
      },

      ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
