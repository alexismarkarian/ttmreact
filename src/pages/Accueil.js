import React from "react";
import Navigation from "../components/Navigation";

const Accueil = () => {
  return (
    <>
      <Navigation />
      <section class="ttm-header">
        <h1>
          tothemoon <strong>Créateur de site web</strong>
        </h1>
        <p>
          To The Moon est une agence web spécialisée dans la création de site
          web, webdesign et communication digital.
          <button href="#">Nos œuvres</button>
        </p>
      </section>
    </>
  );
};

export default Accueil;
