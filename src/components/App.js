import React from 'react';
import About from './About';
import Contact from './Contact';
import Interest from './Interest';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutClicked: false,
      contactClicked: false,
      interestClicked: false
    };
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleInterestClick = this.handleInterestClick.bind(this);
  }

  handleAboutClick(event) {
    if (this.state.aboutClicked === false) {
      this.setState({ aboutClicked: true });
    } else {
      this.setState({ aboutClicked: false });
    }
  }

  handleContactClick(event) {
    if (this.state.contactClicked === false) {
      this.setState({ contactClicked: true });
    } else {
      this.setState({ contactClicked: false });
    }
  }

  handleInterestClick(event) {
    if (this.state.interestClicked === false) {
      this.setState({ interestClicked: true });
    } else {
      this.setState({ interestClicked: false });
    }
  }

  render () {
    let aboutClick = () => {
      this.handleAboutClick();
    };

    let contactClick = () => {
      this.handleContactClick();
    };

    let interestClick = () => {
      this.handleInterestClick();
    };

    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
          <a className="navbar-brand">Audrey</a>

        </nav>
          <div className="container">
            <div className="starter-template">
            <h1>Audrey Gehring</h1>
              <About
                clickedStatus={this.state.aboutClicked}
                aboutClick={aboutClick}
              />

            <Contact
              clickedStatus={this.state.contactClicked}
              contactClick={contactClick}
              gitHubLink={"https://github.com/audreygehring"}
              linkedInLink={"https://www.linkedin.com/in/audreygehring/"}
            />

            <Interest
              clickedStatus={this.state.interestClicked}
              interestClick={interestClick}
              rescueLink={"http://www.ns4ar.org/"}
              settlersLink={"http://www.catan.com/"}
            />


          </div>
        </div>
      </div>
    );
  }
}

export default App;
