import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router.jsx';
import { ReactLenis, useLenis } from 'lenis/react'

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ReactLenis root>
<React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,    
  </ReactLenis>
)
