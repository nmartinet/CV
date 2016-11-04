import React from 'react';

function Entry({degree, instit, date}){
  return (
    <div className="edu-entry">
      <header>
        <div className="degree">
          {degree}
        </div>
        <div className="date">
          {date}
        </div>
      </header>
      <div>
        {instit}
      </div>
    </div>
  );
}

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Education';
  }
  render() {
    return (
      <section className="education">
        <header>
          <h2>{this.props.data.title}</h2>
        </header>
        {this.props.data.content.map(Entry)}
      </section>
    );
  }
}

export default Education;
