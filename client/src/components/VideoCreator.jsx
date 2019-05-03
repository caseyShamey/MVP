import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class VideoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: null,
      parentNode: null,
      link: null,
      choiceOne: null,
      choiceTwo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleParentClick = this.handleParentClick.bind(this);
    this.handleChoiceClick = this.handleChoiceClick.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleChoiceOneChange = this.handleChoiceOneChange.bind(this);
    this.handleChoiceTwoChange = this.handleChoiceTwoChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    axios.post('/videoCreator', {
      link: this.state.link,
      choiceOne: this.state.choiceOne,
      choiceTwo: this.state.choiceTwo
    })
    .then(response => {
      console.log(response)
      this.setState({currentNode: response.data._id})
      console.log('currentNode:', this.state.currentNode)
      console.log('parentNode:', response.data.parentNode)
    })
    .catch(error => {
      console.log(error)
    });
  }

  handleParentClick(event) {
    console.log('You Clicked!')
  }

  handleChoiceClick(event) {
    console.log('You Clicked Here Too!')
  }

  handleLinkChange(event) {
    this.setState({link: event.target.value});
  }

  handleChoiceOneChange(event) {
    this.setState({choiceOne: event.target.value});
  }

  handleChoiceTwoChange(event) {
    this.setState({choiceTwo: event.target.value});
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
            onClick={this.handleParentClick}
          >
            <Typography
              variant="h6"
              component="h6"
              align="center"
            >
              <Grid item xs={12} >
                Parent Story Node
              </Grid>
              <Grid item xs={12}>
                Link
              </Grid>
              <Grid item xs={12}>
                Link Goes Here
              </Grid>
              <Grid item xs={6} sm container direction="row" spacing={16}>
                <Grid item xs={6}>
                  Choice One
                </Grid>
                <Grid item xs={6}>
                  Choice Two
                </Grid>
                <Grid item xs={6}>
                Choice One Here
              </Grid>
              <Grid item xs={6}>
                Choice Two Here
              </Grid>
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
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      value="Submit"
                    >
                      Submit Node
                    </Button>
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
              variant="h6"
              component="h6"
              align="center"
            >
              <Grid item spacing={16}>
                Choices
              </Grid>
              <Grid
                container
                spacing={24}
                style={{padding: 24}}
                direction="column"
              >
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={6}>
                    One
                  </Grid>
                  <Grid item xs={6}>
                    Two
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={6}>
                    Link
                  </Grid>
                  <Grid item xs={6}>
                    Link
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={6}>
                    Link Here
                  </Grid>
                  <Grid item xs={6}>
                    Link Here
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={3}>
                    Choice One
                  </Grid>
                  <Grid item xs={3}>
                    Choice Two
                  </Grid>
                  <Grid item xs={3}>
                    Choice One
                  </Grid>
                  <Grid item xs={3}>
                    Choice Two
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={3}>
                    Choice One Here
                  </Grid>
                  <Grid item xs={3}>
                    Choice Two Here
                  </Grid>
                  <Grid item xs={3}>
                    Choice One Here
                  </Grid>
                  <Grid item xs={3}>
                    Choice Two Here
                  </Grid>
                </Grid>

              </Grid>

            </Typography>
          </Grid>


        </Paper>

      </div>
    )
  }
}

export default VideoCreator;