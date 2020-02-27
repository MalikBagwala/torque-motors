import React from "react";

export default function({ title, className, desc, image, img1, img2 }) {
  return (
    <section className="car-page">
      <section className={`car-page-hero ${className}`}>
        <h1 className="display-1 text-white">{title}</h1>
      </section>
      <div className="row p-5">
        <div className="col-md-4">
          <img height="400px" width="400px" src={img1} alt="" />
          <img
            className="mt-3"
            height="400px"
            width="400px"
            src={img2}
            alt=""
          />
        </div>
        <div className="col-md-8">
          <h1 className="display-3">Specifications</h1>
          <p className="mt-4 lead text-muted">{desc}</p>
        </div>
      </div>
    </section>
  );
}
