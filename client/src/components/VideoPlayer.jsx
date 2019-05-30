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
      link: null,
      choiceOne: null,
      choiceTwo: null,
      childOne: null,
      childTwo: null
    }

    this.onChoiceOne = this.onChoiceOne.bind(this)
    this.onChoiceTwo = this.onChoiceTwo.bind(this)
  }

componentDidMount() {
  fetch('/init')
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
          console.log('response', res)
          this.setState({
            currentNode: res._id,
            link: res.link,
            choiceOne: res.choiceOne,
            choiceTwo: res.choiceTwo,
            childOne: res.childOne,
            childTwo: res.childTwo
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
            url = {this.state.link}
            width = {1280}
            height = {800}
            controls = {true}
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