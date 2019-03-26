import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Node from './helpers.js';

var node = new Node();
var currentNode = node;
class VideoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeTotal: node,
      currentNode: node,
      parentNode: currentNode.parent,
      childOne: currentNode.children[0],
      childTwo: currentNode.children[1],
      choiceOne: '',
      choiceTwo: '',
      link: ''
    }

    this.handleChoiceOneChange = this.handleChoiceOneChange.bind(this);
    this.handleChoiceTwoChange = this.handleChoiceTwoChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onGoBack = this.onGoBack.bind(this);
    this.onNewNodeChoiceOne = this.onNewNodeChoiceOne.bind(this);
    this.onNewNodeChoiceTwo = this.onNewNodeChoiceTwo.bind(this);
    // this.addChild = this.addChild.bind(this);
  }

  handleChoiceOneChange(event) {
    this.setState({
      choiceOne: event.target.value
    })
    // if (count === 0) {
    // node.choiceOneText = event.target.value
    // this.setState({
    //   choiceOne: event.target.value});
    // } else if (count === 1 && choiceDirection === 1) {
    //   node.children[0].choiceOneText = event.target.value
    //   this.setState({
    //     choiceOne: event.target.value});
    // } else if (count === 1 && choiceDirection === 2) {
    //   node.children[1].choiceOneText = event.target.value
    //   this.setState({
    //     choiceOne: event.target.value});
    // }
  }

  handleChoiceTwoChange(event) {
    this.setState({
      choiceTwo: event.target.value
    })
    // if (count === 0) {
    //   node.choiceTwoText = event.target.value
    //   this.setState({
    //     choiceTwo: event.target.value});
    //   } else if (count === 1 && choiceDirection === 1) {
    //     node.children[0].choiceTwoText = event.target.value
    //     this.setState({
    //       choiceTwo: event.target.value});
    //   } else if (count === 1 && choiceDirection === 2) {
    //     node.children[1].choiceTwoText = event.target.value
    //     this.setState({
    //       choiceTwo: event.target.value});
    //   }
  }

  handleLinkChange(event) {
    this.setState({
      link: event.target.value
    })
    // if (count === 0) {
    //   node.video = event.target.value
    //   this.setState({
    //     link: event.target.value});
    //   } else if (count === 1 && choiceDirection === 1) {
    //     node.children[0].video = event.target.value
    //     this.setState({
    //       link: event.target.value});
    //   } else if (count === 1 && choiceDirection === 2) {
    //     node.children[1].video = event.target.value
    //     this.setState({
    //       link: event.target.value});
    //   }
  }

  handleSubmit(event) {
    console.log('currentNode', currentNode);
    currentNode.video = this.state.link
    currentNode.choiceOneText = this.state.choiceOne
    currentNode.choiceTwoText = this.state.choiceTwo
    console.log('update', node)


    // var jsonState = JSON.stringify(node);
    // console.log('jsonState', jsonState)

    //     fetch('/videoCreator', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: jsonState
    //     }).catch((err) => {
    //       console.error(err)
    //     }).then(res => console.log('Success!', res.text()))

    this.setState({
      //   parentNode: node.children[0].parent,
      //   currentNode: node.children[0],
        choiceOne: '',
        choiceTwo: '',
        link: ''
      });
    event.preventDefault();
  }

  onGoBack(event) {
  }

  onNewNodeChoiceOne(event) {
      //node.addChild()
    let temp = this.state.currentNode.addChild(new Node())
    this.setState({
      currentNode: node.children[0]
    }, function() {
      console.log('currentNode', node)
    })
      // this.setState({
      // //   parentNode: node.children[0].parent,
      // //   currentNode: node.children[0],
      //   choiceOne: '',
      //   choiceTwo: '',
      //   link: ''
      // });
    event.preventDefault();
  }

  onNewNodeChoiceTwo(event) {
    // node.addChild()
    let kid = currentNode.addChild()
    this.setState({
      currentNode: kid
    })
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Paper elevation={1}>
            <Grid container spacing={24} style={{padding: 24}}>
              <Grid item sm={6}>

                <TextField
                  style={{padding:24}}
                  id="choiceOneText"
                  type="text"
                  placeholder="Choice One Button Text"
                  value={this.state.choiceOne}
                  onChange={this.handleChoiceOneChange}
                  margin="normal"
                  variant="filled"
                />

                <TextField style={{padding:24}}
                  id="Link"
                  type="url"
                  placeholder="Link"
                  value={this.state.link}
                  onChange={this.handleLinkChange}
                  margin="normal"
                  variant="filled"
                />

              </Grid>

              <Grid item sm={6}>

                <TextField style={{padding:24}}
                  id="choiceTwoText"
                  type="text"
                  placeholder="Choice Two Button Text"
                  value={this.state.choiceTwo}
                  onChange={this.handleChoiceTwoChange}
                  margin="normal"
                  variant="filled"
                />


              <Grid item sm={6}>
                <Button
                variant="contained"
                color="primary"
                onClick={this.onNewNodeChoiceOne}
                >
                  New Node for Choice One
                </Button>

                <Button
                variant="contained"
                color="primary"
                onClick={this.onNewNodeChoiceTwo}
                >
                  New Node for Choice Two
                </Button>
              </Grid>

              </Grid>
              <Grid item sm={6}>
                <Button
                variant="contained"
                color="primary"
                onClick={this.onGoBack}
                >
                  Go Back
                </Button>

                <Button
                variant="contained"
                color="primary"
                type="submit"
                >
                  Submit Node
                </Button>
              </Grid>

            </Grid>
          </Paper>
        </form>
      </div>
    )
  }
}

export default VideoCreator;