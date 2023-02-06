import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<h1>Erro 404 (Página não existente)</h1>,
    children:[
      {
        path: "/",
        element: <h1>Home</h1>
      },
      {
        path: "/sobre",
        element: <h1>Página Sobre</h1>  
      },
      {
        path: "/contato",
        element: <h1>Página Contato</h1>  
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)