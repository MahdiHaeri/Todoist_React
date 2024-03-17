import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        errorElement: <NotFoundPage />
    },
    {
        path: "auth/login",
        element: <LoginPage />,
        errorElement: <NotFoundPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
