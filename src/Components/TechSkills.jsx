import React from 'react';

function TechItem(text){
  return (
    <div className="tech-item">
      {text}
    </div>
  )
}

class TechSkills extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TechSkills';
  }
  render() {
    return (
      <section>
        <header>
          <h2>{this.props.data.title}</h2>
        </header>
        <div className="tech-list">
          {this.props.data.content.map(TechItem)}
        </div>
      </section>
    );
  }
}

export default TechSkills;
