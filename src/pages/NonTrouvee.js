import React from "react";
import Navigation from "../components/Navigation";

const NonTrouvee = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Page non trouvée</h1>
        <a href="#">Retourner à l'accueil</a>
      </div>
    </>
  );
};

export default NonTrouvee;
