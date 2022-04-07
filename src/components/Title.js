import React from 'react';

class Title extends React.Component {
  render() {
    const tp = this.props;
    return (
      <h2>{ tp.headline }</h2>
    );
  }
}

export default Title;
