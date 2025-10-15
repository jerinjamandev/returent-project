import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
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
import Authprovider from './provider/Authprovider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Fooddetails from './pages/Fooddetails.jsx';

const queryClient = new QueryClient()


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
          {
        path: '/food/:id',
        element:<Fooddetails></Fooddetails>
      },

      ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>  
    <ToastContainer />
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>

  </Authprovider>
 </StrictMode>
)
