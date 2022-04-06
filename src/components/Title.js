import React from 'react';

class Title extends React.Component {
  render(headline) {
    headline = 'planets';
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

export default Title;
