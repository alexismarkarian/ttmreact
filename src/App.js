import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import AgenceDeCommunication from "./pages/AgenceDeCommunication";
import CreationSiteInternet from "./pages/CreationSiteInternet";
import Contact from "./pages/Contact";
import NonTrouvee from "./pages/NonTrouvee";
import Oeuvres from "./pages/Oeuvres";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route
            path="/agence-de-communication"
            element={<AgenceDeCommunication />}
          />
          <Route
            path="/creation-site-internet"
            element={<CreationSiteInternet />}
          />
          <Route path="/oeuvres" element={<Oeuvres />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<NonTrouvee />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
