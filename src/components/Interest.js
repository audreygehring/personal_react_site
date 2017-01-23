import React from 'react';

const Interest = props => {
  let audreyInterests;
  if (props.clickedStatus == false ) {
    audreyInterests = "";
  } else {
    audreyInterests = <div>
                        <a href={props.rescueLink} target="_blank">Animal Rescue</a>
                        <br/>
                        <a href={props.settlersLink} target="_blank">Settlers of Catan</a>
                      </div>;
  }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 onClick={props.interestClick}>interests</h2>
            {audreyInterests}
          </div>
        </div>
      </div>
  );
};

export default Interest;
