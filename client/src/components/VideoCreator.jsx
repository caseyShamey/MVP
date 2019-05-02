import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { borders } from '@material-ui/system';

// import Node from './helpers.js';

// var node = new Node();
// var currentNode = node;
class VideoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: null,
      parentNode: null
    }
    // this.state = {
    //   nodeTotal: node,
    //   currentNode: node,
    //   parentNode: currentNode.parent,
    //   childOne: currentNode.children[0],
    //   childTwo: currentNode.children[1],
    //   choiceOne: '',
    //   choiceTwo: '',
    //   link: ''
    // }

    this.handleChoiceOneChange = this.handleChoiceOneChange.bind(this);
    this.handleChoiceTwoChange = this.handleChoiceTwoChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onGoBack = this.onGoBack.bind(this);
    this.onNewNodeChoiceOne = this.onNewNodeChoiceOne.bind(this);
    this.onNewNodeChoiceTwo = this.onNewNodeChoiceTwo.bind(this);

  }

  handleChoiceOneChange(event) {
    this.setState({
      choiceOne: event.target.value
    })

  }

  handleChoiceTwoChange(event) {
    this.setState({
      choiceTwo: event.target.value
    })

  }

  handleLinkChange(event) {
    this.setState({
      link: event.target.value
    })

  }

  handleSubmit(event) {
    console.log('currentNode', currentNode);
    currentNode.video = this.state.link
    currentNode.choiceOneText = this.state.choiceOne
    currentNode.choiceTwoText = this.state.choiceTwo
    console.log('update', node)


      this.setState({
        choiceOne: '',
        choiceTwo: '',
        link: ''
      });
    event.preventDefault();
  }

  onGoBack(event) {
  }

  onNewNodeChoiceOne(event) {
    let temp = this.state.currentNode.addChild(new Node())
    this.setState({
      parent: this.state.currentNode,
      currentNode: temp
    }, function() {
      console.log('currentNode', node)
    })

    event.preventDefault();
  }

  onNewNodeChoiceTwo(event) {
    let kid = currentNode.addChild()
    this.setState({
      currentNode: kid
    })
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <Paper elevation={1}>

          <Grid
            container
            spacing={24}
            style={{padding: 24, borderBottom: '1px solid black'}}
            direction="column"
          >
            <Typography
              variant="h5"
              component="h3"
              align="center"
            >
              <Grid item s={12}>
                Parent Story Node
              </Grid>
            </Typography>
          </Grid>

          <Grid
            container
            style={{padding: 24, borderBottom: '1px solid black'}}
            direction="column"
          >
            <Typography
              variant="h5"
              component="h3"
              align="center"
            >
              <form onSubmit={this.handleSubmit}>
                <Grid item xs={12}>
                  Current Story Node
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    style={{padding:24}}
                    id="Link"
                    type="url"
                    placeholder="Link"
                    value={this.state.link}
                    onChange={this.handleLinkChange}
                    margin="normal"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm container direction="row" spacing={16}>
                  <Grid item xs={6}>
                    <TextField
                      style={{padding:24}}
                      id="choiceOne"
                      type="text"
                      placeholder="Choice One Button Text"
                      value={this.state.choiceOne}
                      onChange={this.handleChoiceOneChange}
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      style={{padding:24}}
                      id="choiceTwo"
                      type="text"
                      placeholder="Choice Two Button Text"
                      value={this.state.choiceTwo}
                      onChange={this.handleChoiceTwoChange}
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>
                </Grid>

              </form>

            </Typography>
          </Grid>


          <Grid
            container
            spacing={24}
            style={{padding: 24}}
            direction="column"
          >
            <Typography
              variant="h5"
              component="h3"
              align="center"
            >
              <Grid item spacing={16}>
                Choices
              </Grid>


            </Typography>
          </Grid>


        </Paper>
        {/* <form onSubmit={this.handleSubmit}>
          <Paper elevation={1}>
            <Grid container spacing={24} style={{padding: 24}}>
              <Typography variant="h5" component="h3">
                Current Node
              </Typography>
              <Grid
                container
                item sm={12}
                direction="column"
                justify="center"
                alignItems="center"
              >

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

                <TextField
                  style={{padding:24}}
                  id="choiceOne"
                  type="text"
                  placeholder="Choice One Button Text"
                  value={this.state.choiceOne}
                  onChange={this.handleChoiceOneChange}
                  margin="normal"
                  variant="filled"
                />


              </Grid>

              <Grid item sm={6}>

                <TextField style={{padding:24}}
                  id="choiceTwo"
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
              <Typography variant="h5" component="h3">
              Parent Node
            </Typography>
            </Grid>
          </Paper>
        </form> */}
      </div>
    )
  }
}

export default VideoCreator;