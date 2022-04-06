import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { this.props.planetName }
          <img src={ this.props.planetImage } alt={`Planeta ${this.props.planetName}`} />
        </p>
      </div>
    );
  }
}

export default Title;
