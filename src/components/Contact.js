import React from 'react';

const Contact = props => {
  let contactAudrey;
  if (props.clickedStatus == false ) {
    contactAudrey = "";
  } else {
    contactAudrey = <blockquote>
                      <a href={props.gitHubLink} target="_blank">Github</a>
                      <br/>
                      <a href={props.linkedInLink} target="_blank">LinkedIn</a>
                      <br/>
                      <a href="mailto:audreygehring@gmail.com">Email</a>
                    </blockquote>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h2 onClick={props.contactClick}>contact</h2>
          <h2> {contactAudrey} </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
