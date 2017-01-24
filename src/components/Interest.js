import React from 'react';

const Interest = props => {
  let audreyInterests;
  if (props.clickedStatus == false ) {
    audreyInterests = "";
  } else {
    audreyInterests = <blockquote>
                        <a href={props.rescueLink} target="_blank">Dog Rescue</a>
                        <br/>
                        <a href={props.settlersLink} target="_blank">Settlers of Catan</a>
                        <br/>
                        <a href={props.harryPotterLink} target="_blank">Harry Potter</a>
                      </blockquote>;
  }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 onClick={props.interestClick}>interests</h2>
            <h2> {audreyInterests} </h2>
          </div>
        </div>
      </div>
  );
};

export default Interest;
