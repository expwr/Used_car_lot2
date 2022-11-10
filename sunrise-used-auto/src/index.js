import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Reps from "./Pages/Reps";
import LoanEst from "./Pages/LoanEst";
import Account from "./Pages/Account";
import Support from "./Pages/Support";
import "./App.css";
import NavBarComp from "./Components/NavBar";
const AppLayout = () => (
  <>
    <NavBarComp />
    <Outlet />
  </>
);

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<Home />}/>
    <Route path="/Cars" element={<Cars />}/>
    <Route path="/Reps" element={<Reps/>}/>
    <Route path="/LoanEst" element={<LoanEst />}/>
    <Route path="/Account" element={<Account />}/>
    <Route path="/Support" element={<Support />}/>
  </Route>
))

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);