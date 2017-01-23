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
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2 onClick={props.aboutClick}>about</h2>
              <p> {aboutAudrey} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
