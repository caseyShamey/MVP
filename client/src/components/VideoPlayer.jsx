import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: null,
      url: null,
      choiceOne: null,
      choiceTwo: null
    }

    this.onChoiceOne = this.onChoiceOne.bind(this)
    this.onChoiceTwo = this.onChoiceTwo.bind(this)
  }

componentDidMount() {
  fetch('/db')
        .catch(err => {
          console.error(err)
        })
        .then(res => {
          return res.json()
        },
        (err) =>{
          console.error(err)
        })
        .then(res => {
          console.log('array', JSON.parse(res[0].storyline))
          var story = JSON.parse(res[0].storyline)
          this.setState({
            currentNode: story,
            url: story.video,
            choiceOne: story.choiceOneText,
            choiceTwo: story.choiceTwoText
          })
        })
}

onChoiceOne() {
  let temp = this.state.currentNode
  this.setState({
    currentNode: temp.children[0]
  }, function() {
    this.setState({
      url: this.state.currentNode.video,
      choiceOne: this.state.currentNode.choiceOneText,
      choiceTwo: this.state.currentNode.choiceTwoText,
    })
  })
}

onChoiceTwo() {
  let temp = this.state.currentNode
  this.setState({
    currentNode: temp.children[1]
  }, function() {
    this.setState({
      url: this.state.currentNode.video,
      choiceOne: this.state.currentNode.choiceOneText,
      choiceTwo: this.state.currentNode.choiceTwoText,
    })
  })
}

  render() {
    return (
      <div>
        <div>
          <ReactPlayer
            url = {this.state.url}
            playing />
        </div>
        <div>
          <Button
          variant="contained"
          color="primary"
          onClick={this.onChoiceOne}
          >
            {this.state.choiceOne}
          </Button>
        </div>
        <div>
          <Button
          variant="contained"
          color="primary"
          onClick={this.onChoiceTwo}
          >
            {this.state.choiceTwo}
          </Button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;