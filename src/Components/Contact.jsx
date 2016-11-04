import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Contact';
  }
  render() {
    return (
      <div className="contact">
        {this.props.data}
      </div>
    );
  }
}

export default Contact;
