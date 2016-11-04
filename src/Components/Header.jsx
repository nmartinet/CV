import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    return (
      <div className="header">
        <h1>Nicolas Martinet</h1>
      </div>
    );
  }
}

export default Header;
