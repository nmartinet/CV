import React from 'react'
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import Profile from './Profile.jsx'
import TechSkills from './TechSkills.jsx'
import ProfessionalExp from './ProfessionalExp.jsx'
import Education from './Education.jsx';
import data from './data.jsx';

class CV extends React.Component {
  render(){
    let lang = this.props.params.lang || 'en';

    let cvData = data[lang];

    return (
      <div className="container main">
        <Header /> 
        <Contact          data={cvData.contact} />
        <Profile          data={cvData.profile}/>
        <TechSkills       data={cvData.techSkills}/>
        <ProfessionalExp  data={cvData.profExperience}/>
        <Education        data={cvData.education}/>
      </div>
    )
  }
}

export default CV;