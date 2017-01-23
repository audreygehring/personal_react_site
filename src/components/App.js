import React from 'react';
import About from './About';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutClicked: false,
      contactClicked: false
    };
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
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

  render () {
    let aboutClick = () => {
      this.handleAboutClick();
    };

    let contactClick = () => {
      this.handleContactClick();
    };
    
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
          <a className="navbar-brand">Audrey</a>
        </nav>
          <div className="container">
            <div className="starter-template">
            <h1>Audrey Gehring</h1>
            <img src={"./images/IMG_9482.JPG"} className="img-fluid" alt="profile photo"></img>
              <About
                clickedStatus={this.state.aboutClicked}
                aboutClick={aboutClick}
              />

            <Contact
              clickedStatus={this.state.contactClicked}
              contactClick={contactClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
