import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const altImg = `Planeta ${this.props.planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { this.props.planetName }
          <img src={ this.props.planetImage } alt={ altImg } />
        </p>
      </div>
    );
  }
}

export default PlanetCard;
