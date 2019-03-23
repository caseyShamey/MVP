import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import VideoCreator from './VideoCreator.jsx'

var videoPlayer = <VideoPlayer />
var videoCreator = <VideoCreator />
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: videoCreator
    }
  }


  componentDidMount() {}

  handleClick() {}

  render() {
    return (
      <div>
        {this.state.view}
      </div>
    )
  }
}



export default App