import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import VideoCreator from './VideoCreator.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: videoPlayer
    }
  }


  componentDidMount() {}

  handleClick() {}

  render() {
    return (
      <div>
        <VideoPlayer />
      </div>
    )
  }
}

var videoPlayer = <VideoPlayer />
var videoCreator = <VideoCreator />

export default App