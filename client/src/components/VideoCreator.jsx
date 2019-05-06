import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

class VideoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentNode: undefined,
      parentLink: "",
      parentChoiceOne: "",
      parentChoiceTwo: "",
      parentChildren: [],

      currentNode: undefined,
      link: "",
      choiceOne: "",
      choiceTwo: "",
      children: [],

      linkFormId: 'Link',
      linkFormType: 'url',
      linkFormPlaceholder: 'Link',

      choiceOneId: 'choiceOne',
      choiceOneType: 'text',
      choiceOnePlaceholder: "Choice One Button Text",

      choiceTwoId: 'choiceTwo',
      choiceTwoType: 'text',
      choiceTwoPlaceholder: "Choice Two Button Text"

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleParentClick = this.handleParentClick.bind(this);
    this.handleChoiceClickOne = this.handleChoiceClickOne.bind(this);
    this.handleChoiceClickTwo = this.handleChoiceClickTwo.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleChoiceOneChange = this.handleChoiceOneChange.bind(this);
    this.handleChoiceTwoChange = this.handleChoiceTwoChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.parentNode) {
      axios.post('/videoCreator', {
        head: true,
        link: this.state.link,
        choiceOne: this.state.choiceOne,
        choiceTwo: this.state.choiceTwo,
        children: []
      })
      .then(response => {
        console.log('response', response.data)
        this.setState({currentNode: response.data._id})
        console.log('currentNode:', this.state.currentNode)
        console.log('parentNode:', response.data.parentNode)
      })
      .catch(error => {
        console.log(error)
      });
    } else {
      axios.post('/videoCreator', {
        head: false,
        link: this.state.currentLink,
        choiceOne: this.state.choiceOne,
        choiceTwo: this.state.choiceTwo,
        children: []
      })
      .then(response => {
        console.log('response', response.data)
        this.setState({currentNode: response.data._id})
        console.log('currentNode', this.state.currentNode)
        console.log('parentNode:', response.data.parentNode)
      })
      .catch(error => {
        console.log(error)
      });
    }
  }

  handleParentClick(event) {
    console.log('You Clicked!')
  }

  handleChoiceClickOne(event) {
    this.setState({
      parentNode: this.state.currentNode,
      parentNode: undefined,
      parentLink: this.state.link,
      parentChoiceOne: this.state.choiceOne,
      parentChoiceTwo: this.state.choiceTwo,
      parentChildren: [],

      currentNode: undefined,
      link: "",
      choiceOne: "",
      choiceTwo: ""
    }, () => {console.log('updated state', this.state)})

    // axios get call for parent node then
  }

  handleChoiceClickTwo(event) {
    this.setState({
      parentNode: this.state.currentNode,
      currentNode: undefined,
      link: "",
      choiceOne: "",
      choiceTwo: ""
    })
  }

  handleLinkChange(event) {
    this.setState({link: event.target.value}, () => console.log('link', this.state.link));
  }

  handleChoiceOneChange(event) {
    this.setState({choiceOne: event.target.value});
  }

  handleChoiceTwoChange(event) {
    this.setState({choiceTwo: event.target.value});
  }

  clearInputs() {
    this.setState
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
                {console.log('parentLink', this.state.parentLink)}
                {this.state.parentLink}
              </Grid>
              <Grid item xs={6} sm container direction="row" spacing={16}>
                <Grid item xs={6}>
                  Choice One
                </Grid>
                <Grid item xs={6}>
                  Choice Two
                </Grid>
                <Grid item xs={6}>
                  {this.state.parentChoiceOne}
                </Grid>
                <Grid item xs={6}>
                  {this.state.parentChoiceTwo}
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
                  <Form
                    handleChange={this.handleLinkChange}
                    inputVal={this.state.link}
                    id={this.state.linkFormId}
                    type={this.state.linkFormType}
                    placeholder={this.state.linkFormPlaceholder}
                  />
                </Grid>

                <Grid item xs={12} sm container direction="row" spacing={16}>
                  <Grid item xs={6}>
                    <Form
                      handleChange={this.handleChoiceOneChange}
                      inputVal={this.state.choiceOne}
                      id={this.state.choiceOneId}
                      type={this.state.choiceOneType}
                      placeholder={this.state.choiceOnePlaceholder}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Form
                      handleChange={this.handleChoiceTwoChange}
                      inputVal={this.state.choiceTwo}
                      id={this.state.choiceTwoId}
                      type={this.state.choiceTwoType}
                      placeholder={this.state.choiceTwoPlaceholder}
                    />>

                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      value="Submit"
                    >
                      Save Node
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
                  <Grid item xs={6} onClick={this.handleChoiceClickOne}>
                    One
                  </Grid>
                  <Grid item xs={6} onClick={this.handleChoiceClickTwo}>
                    Two
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={6} onClick={this.handleChoiceClickOne}>
                    Link
                  </Grid>
                  <Grid item xs={6} onClick={this.handleChoiceClickTwo}>
                    Link
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={6} onClick={this.handleChoiceClickOne}>
                    Link Here
                  </Grid>
                  <Grid item xs={6} onClick={this.handleChoiceClickTwo}>
                    Link Here
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={3} onClick={this.handleChoiceClickOne}>
                    Choice One
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickOne}>
                    Choice Two
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickTwo}>
                    Choice One
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickTwo}>
                    Choice Two
                  </Grid>
                </Grid>
                <Grid item xs={12} xs container direction="row">
                  <Grid item xs={3} onClick={this.handleChoiceClickOne}>
                    Choice One Here
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickOne}>
                    Choice Two Here
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickTwo}>
                    Choice One Here
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickTwo}>
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