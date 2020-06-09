import React from 'react';

import './homePage.scss';

import Carousel from '../carousel/Carousel';

const HomePage = () => (
  <main className="main">
    <section className="duurzame-materialen">
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
          <a href="#home">Lees meer</a>
        </div>
      </div>
      <Carousel />
    </section>
    <section className="innovatie">
      <h2>Innovatie</h2>
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
  </main>
);

export default HomePage;
