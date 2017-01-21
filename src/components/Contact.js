import React from 'react';

const Contact = props => {
  let contactAudrey;
  if (props.clickedStatus == false ) {
    contactAudrey = "";
  } else {
    contactAudrey = "Github Logo - LinkedIn Logo";
  }

  return (
    <div>
      <div>
        <h2 onClick={props.contactClick}>contact</h2>
        <h3> {contactAudrey} </h3>
      </div>
    </div>
  );
};

export default Contact;
