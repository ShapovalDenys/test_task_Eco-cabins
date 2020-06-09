import React from 'react';

import './homePage.scss';

import Carousel from '../carousel/Carousel';

const HomePage = () => (
  <main className="main">
    <section id="duurzame-materialen" className="duurzame-materialen">
      <div className="duurzame-materialen__wrap">
        <div className="duurzame-materialen__description">
          <h2>Duurzame materialen</h2>
          <p>
            Alle EcoCabins hebben een hoge isolatiewaarde,
            worden geproduceerd met indien mogelijk duurzame
            en/of natuurlijke materialen en hebben als
            opvallende uiterlijke kenmerk de ‘ronde hoeken’,
            mogelijk gemaakt door het specifieke materiaalgebruik.
            De voordelen van bouwen met hout zijn legio: hout is licht,
            flexibel, isoleert goed en bouwt snel en efficiënt.
          </p>
          <a href="https://www.verbouwkosten.com/duurzaam-renoveren/materialen/">Lees meer</a>
        </div>
      </div>
      <Carousel />
    </section>
    <section className="innovatie">
      <h2 id="innovatie">Innovatie</h2>
      <div className="innovatie__description">
        <p>
          Wij hebben als doel om de EcoCabins voortdurend verder te ontwikkelen en innoveren,
          zodat de EcoCabins uiteindelijk 100% duurzaam en circulair zijn.
          Voorwaarde hierbij is dat de EcoCabins betaalbaar blijven.
          Met behulp van de zon, de wind en de beste isolatie geniet u van.
        </p>
        <p>
          Alle EcoCabins hebben een hoge isolatiewaarde,
          worden geproduceerd met indien mogelijk duurzame en/of
          natuurlijke materialen en hebben als opvallende uiterlijke kenmerk
          de ‘ronde hoeken’, mogelijk gemaakt door het specifieke
          materiaalgebruik De voordelen van bouwen.
        </p>
      </div>
    </section>
    <section id="characteristics" className="characteristics">
      <img className="characteristics__img" src="./img/house.jpg" alt="house" />
      <div className="characteristics__description">
        <div className="characteristics__description-item">
          <h3>Hout</h3>
          <p>De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.</p>
        </div>
        <div className="characteristics__description-item">
          <h3>Glaswol isolatie</h3>
          <p>De combinatie van glaswol met een houtskelet constructie geeft een.</p>
        </div>
        <div className="characteristics__description-item">
          <h3>Afwerking</h3>
          <p>De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.</p>
        </div>
        <div className="characteristics__description-item">
          <h3>Triple glas</h3>
          <p>De combinatie van glaswol met een houtskelet constructie geeft een.</p>
        </div>
        <div className="characteristics__description-item">
          <h3>Stalen onderstel</h3>
          <p>Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid die</p>
        </div>
        <div className="characteristics__description-item">
          <h3>Infrarood vloer</h3>
          <p>De vloer wordt opgewarmd middels opgewekte warmte uit eigen zonne-energie.</p>
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
