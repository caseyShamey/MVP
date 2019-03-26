import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import VideoCreator from './VideoCreator.jsx'
import NavBar from './NavBar.jsx'
import Button from '@material-ui/core/Button';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// import grey from '@material-ui/core/colors/grey';

var videoPlayer = <VideoPlayer />
var videoCreator = <VideoCreator />

// const theme = createMuiTheme({
//   palette: {
//     primary: blue,
//     secondary: grey,
//     type: 'light'
//   },
//   status: {
//     danger: 'orange',
//   },
// });
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: videoCreator
    }

    this.onSwitch=this.onSwitch.bind(this);
  }


  componentDidMount() {}

  onSwitch() {
    if (this.state.view === videoCreator) {
      this.setState({view: videoPlayer})
    } else {
      this.setState({view: videoCreator})
    }
  }

  render() {
    return (
      <div>
        <NavBar />
      {/* <MuiThemeProvider theme={theme}> */}
        {this.state.view}
      {/* </MuiThemeProvider> */}
      <Button
        variant="contained"
        color="primary"
        onClick={this.onSwitch}
      >
      Switch View
      </Button>
      </div>
    )
  }
}

export default App