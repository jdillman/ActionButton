import React from 'react';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onClick() {
    console.log('onClick');
  }

  render() {
    return (
      <button
        onClick={this.onClick}
        className="action-box"
      />;
    );
  }
}

export default ActionButton;
