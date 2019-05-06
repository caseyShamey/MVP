import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import VideoCreator from './VideoCreator.jsx'
import NavBar from './NavBar.jsx'
import Button from '@material-ui/core/Button';

var videoPlayer = <VideoPlayer />
var videoCreator = <VideoCreator />

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
        {this.state.view}
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