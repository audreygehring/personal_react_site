import React from 'react';

const Contact = props => {
  let contactAudrey;
  if (props.clickedStatus == false ) {
    contactAudrey = "";
  } else {
    contactAudrey = "Github Logo - LinkedIn Logo";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 onClick={props.contactClick}>contact</h2>
          <p> {contactAudrey} </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
