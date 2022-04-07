import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const tp = this.props;
    const altImg = `Planeta ${tp.planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { tp.planetName }
          <img src={ tp.planetImage } alt={ altImg } />
        </p>
      </div>
    );
  }
}

export default PlanetCard;
