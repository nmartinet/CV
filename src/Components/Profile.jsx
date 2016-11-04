import React from 'react';

function ProfileItem(text){
  return (
    <li>{text}</li>
  );
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Profile';
  }
  render() {
    return (
      <section>
        <header>
          <h2>{this.props.data.title}</h2>
        </header>
        <ul>
          {this.props.data.content.map(ProfileItem)}
        </ul>
      </section>
    );
  }
}

export default Profile;
  