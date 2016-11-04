import React from 'react';
import marked from 'marked';

function Entry({date, title, company, desc}){
  return (
    <div className="exp-entry">
      <header>
        <div className="title">
          {title}
        </div>
        <div className="company">
          {company}
        </div>
        <div className="date">
          {date}
        </div>
      </header>
      <div dangerouslySetInnerHTML={ {__html: marked(desc)}}></div>
    </div>
  )
}

class ProfessionalExp extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'ProfessionalExp';
  }
  render() {
    return (
      <section>
        <header>
          <h2>{this.props.data.title}</h2>
        </header>
        {this.props.data.content.map(Entry)}
      </section>
    );
  }
}

export default ProfessionalExp;
