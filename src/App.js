import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import bmw1 from "./assets/bmw1.jpg";
import bmw2 from "./assets/bmw2.jpg";
import merc1 from "./assets/merc1.jpg";
import merc2 from "./assets/merc2.jpg";
import audi1 from "./assets/audi1.jpg";
import audi2 from "./assets/audi2.jpg";
import Brands from "./Brands";
import CarPage from "./CarPage";
import Contact from "./Contact";
import Hompage from "./Hompage";

// import bmwBack from "./assets/bmw-back.jpg";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cars/bmw">
          <CarPage
            title="BMW I8"
            className="merc-page"
            img1={bmw1}
            img2={bmw2}
            desc={
              <span>
                The BMW i8 is a plug-in hybrid sports car developed by BMW. The
                i8 is part of BMW's electric fleet "Project i" being marketed as
                a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh
                lithium-ion battery pack that delivers an all-electric range of
                37 km (23 mi) under the New European Driving Cycle. Under the
                United States Environmental Protection Agency cycle, the range
                in EV mode is 24 km (15 mi) with a small amount of gasoline
                consumption. Its design is heavily influenced by the BMW M1
                Homage concept car, which in turn pays homage to BMW's last
                production mid-engined sports car prior to the i8: the BMW M1.
                BMW will cease the production of the BMW i8 in April
                2020.[10][11] The BMW i8 accelerates from 0 to 100 km/h (62 mph)
                in 4.4 seconds[12][13] and has an electronic limited top speed
                of 250 km/h (155 mph). The BMW i8 has a fuel efficiency of 2.1
                L/100 km (134.5 mpg‑imp; 112.0 mpg‑US) under the NEDC test with
                carbon emissions of 49 g/km. The EPA rated the i8 combined fuel
                economy at 76 MPGe (3.1 L gasoline equivalent/100 km; 91 mpg-imp
                gasoline equivalent) and 29 miles per gallon (6.7L/100 km) when
                running in pure gasoline mode (after the battery is drained
                empty). The initial turbodiesel concept car was unveiled at the
                2009 International Motor Show Germany. The production version of
                the BMW i8 was unveiled at the 2013 Frankfurt Motor Show. The i8
                was released in Germany in June 2014.[14] Deliveries to retail
                customers in the U.S. began in August 2014. By early November
                2016 global sales since mid-2014 totaled more than 10,000 BMW
                i8s, making the i8 the world's top selling plug-in electrified
                sports car. The top selling markets are the United States, the
                United Kingdom, Germany, China and Canada.
              </span>
            }
          />
        </Route>
        <Route exact path="/cars/audi">
          <CarPage
            title="Audi R8"
            className="bmw-page"
            img1={audi1}
            img2={audi2}
            desc={
              <span>
                The Audi R8[2] is a mid-engine, 2-seater sports car,[2][3] which
                uses Audi's trademark quattro permanent all-wheel drive
                system.[2] It was introduced by the German car manufacturer Audi
                AG in 2006. The car is exclusively designed, developed, and
                manufactured by Audi AG's private subsidiary company
                manufacturing high performance automotive parts, Audi Sport GmbH
                (formerly quattro GmbH),[4] and is based on the Lamborghini
                Gallardo and presently the Huracán platform.[5] The fundamental
                construction of the R8 is based on the Audi Space Frame,[2] and
                uses an aluminium monocoque which is built using space frame
                principles. The car is built by Audi Sport GmbH in a newly
                renovated factory at Audi's 'aluminium site' at Neckarsulm in
                Germany.[2] It is also the first production car with full-LED
                headlamps.[6]
              </span>
            }
          />
        </Route>
        <Route exact path="/cars/merc">
          <CarPage
            title="Mercedes S Class"
            className="merc-page"
            img1={merc1}
            img2={merc2}
            desc={
              <span>
                The Mercedes-Benz S-Class, formerly known as Sonderklasse
                (German for "special class", abbreviated as "S-Klasse"), is a
                series of full-size luxury sedans and limousines produced by the
                German automaker Mercedes-Benz, a division of German company
                Daimler AG. The S-Class designation for top-of-the-line
                Mercedes-Benz models was officially introduced in 1972 with the
                W116, and has remained in use ever since. The S-Class has
                debuted many of the company's latest innovations, including
                drivetrain technologies, interior features, and safety systems
                (such as the first seatbelt pretensioners).[5] The S-Class has
                ranked as the world's best-selling luxury sedan,[6] and its
                latest generation, the W222 S-Class, premiered in 2013. As in
                previous iterations, the W222 S-Class is sold in standard and
                long-wheelbase versions; I4, V6, V8, V12, diesel and hybrid
                powertrains are offered. All models built in Mexico or sold in
                the United States are available in long wheelbase only. In
                automotive terms, Sonderklasse refers to "a specially outfitted
                car." Although used colloquially for decades,[citation needed]
                following its official application in 1972, six generations of
                officially named S-Klasse sedans have been produced. Previous
                two-door coupe models of the S-Class were known as SEC and later
                S-Coupe. In 1996 the S-Class coupe was spun off in a separate
                line as the CL-Class, however as of June 2014, it has been
                re-designated as the S-Class Coupé for the 2015 model year,
                doing away with the CL-Class. In 2016, the S-Class Cabriolet,
                internally named A217, was introduced with three variants: the S
                550 Cabriolet, the Mercedes-AMG S 63 Cabriolet with 4Matic, and
                the Mercedes-AMG S 65 Cabriolet.[7] The Mercedes-Maybach S 650
                Cabriolet, based on the S 65 Cabriolet, was announced in
                2016.[8]
              </span>
            }
          />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Hompage></Hompage>
            <Brands />
            <Contact />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
