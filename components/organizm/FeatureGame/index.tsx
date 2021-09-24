/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import { FeatureCardGame } from '../../molecules';

const FeatureGame = () => {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeatureCardGame
            image="Thumbnail-1"
            title="Super Mechs"
            category="Mobile"
          />
          <FeatureCardGame
            image="Thumbnail-2"
            title="Call of Duty: Modern"
            category="Mobile"
          />
          <FeatureCardGame
            image="Thumbnail-3"
            title="Mobile Legends"
            category="Mobile"
          />
          <FeatureCardGame
            image="Thumbnail-4"
            title="Clash of Clans"
            category="Mobile"
          />
          <FeatureCardGame
            image="Thumbnail-5"
            title="Valorant"
            category="Desktop"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureGame;
