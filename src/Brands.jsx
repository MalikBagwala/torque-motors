import React from "react";
import bmw from "./assets/bmw-logo.jpg";
import audi from "./assets/audi-logo.png";
import merc from "./assets/mercedes-logo.jpg";
import { Link } from "react-router-dom";

export default function() {
  return (
    <section className="w-100 py-4">
      <div className="row">
        <div className="col">
          <Link to="/cars/bmw">
            <img height="250px" width="250px" src={bmw} alt="" />
            <p className="lead">BMW Motors</p>
          </Link>
        </div>
        <div className="col">
          <Link to="/cars/audi">
            <img height="250px" width="250px" src={audi} alt="" />
            <p className="lead">Audi Motors</p>
          </Link>
        </div>
        <div className="col">
          <Link to="/cars/merc">
            <img height="250px" width="250px" src={merc} alt="" />
            <p className="lead">Mercedes Benz</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
