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
        <h1> Audrey Gehring </h1>
        <About
          clickedStatus={this.state.aboutClicked}
          aboutClick={aboutClick}
        />

        <Contact
          clickedStatus={this.state.contactClicked}
          contactClick={contactClick}
        />
      </div>
    );
  }
}

export default App;
