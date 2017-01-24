import React from 'react';

const About = props => {
  let aboutAudrey;
    if (props.clickedStatus == false ) {
      aboutAudrey = "";
    } else {
      aboutAudrey = <blockquote>Audrey Gehring is an aspiring full-stack web developer looking for opportunities in Boston, MA. A former human resources and benefits professional, Audrey attended the intensive Launch Academy bootcamp during the winter of 2016 in order to make an efficient career transition. </blockquote>;
    }

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
            <h2 onClick={props.aboutClick}>about</h2>
              <h2> {aboutAudrey} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
