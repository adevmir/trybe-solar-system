import React from 'react';

class MissionCard extends React.Component {
  render() {
    const tp = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          { tp.name }
        </p>
        <p data-testid="mission-year">
          { tp.year }
        </p>
        <p data-testid="mission-country">
          { tp.country }
        </p>
        <p data-testid="mission-destination">
          { tp.destination }
        </p>
      </div>
    );
  }
}

export default MissionCard;
