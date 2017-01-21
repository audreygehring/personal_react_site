import React from 'react';

const About = props => {
  let aboutAudrey;
    if (props.clickedStatus == false ) {
      aboutAudrey = "";
    } else {
      aboutAudrey = "Audrey Gehring is an aspiring web developer looking for opportunities in Boston, MA. Favorite languages include: Ruby, React.js, JavaScript and PostgreSQL";
    }

  return (
    <div>
      <div>
        <h2 onClick={props.aboutClick}>About</h2>
        <h3> {aboutAudrey} </h3>
      </div>
    </div>
  );
};

export default About;
