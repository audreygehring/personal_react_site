import React from 'react';

const Contact = props => {
  let contactAudrey;
  if (props.clickedStatus == false ) {
    contactAudrey = "";
  } else {
    contactAudrey = <div>
                      <a href={props.gitHubLink} target="_blank">Github</a>
                      <br/>
                      <a href={props.linkedInLink} target="_blank">LinkedIn</a>
                    </div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 onClick={props.contactClick}>contact</h2>
          {contactAudrey}
        </div>
      </div>
    </div>
  );
};

export default Contact;
