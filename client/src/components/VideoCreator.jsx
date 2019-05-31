import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Form from './Form';

// create separate get post and put functions

class VideoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentNode: undefined,
      parentParent: undefined,
      parentLink: "",
      parentChoiceOne: "",
      parentChoiceTwo: "",
      parentChildOne: undefined,
      parentChildTwo: undefined,

      currentNode: undefined,
      parent: undefined,
      link: "",
      choiceOne: "",
      choiceTwo: "",
      childOne: undefined,
      childTwo: undefined,
      fromChild: "",

      childOneNode: undefined,
      childOneParent: undefined,
      childOneLink: "",
      childOneChoiceOne: "",
      childOneChoiceTwo: "",
      childOneChildOne: undefined,
      childOneChildTwo: undefined,

      childTwoNode: undefined,
      childTwoParent: undefined,
      childTwoLink: "",
      childTwoChoiceOne: "",
      childTwoChoiceTwo: "",
      childTwoChildOne: undefined,
      childTwoChildTwo: undefined,

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
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleChoiceClickTwo = this.handleChoiceClickTwo.bind(this);
    this.handleChoiceOneChange = this.handleChoiceOneChange.bind(this);
    this.handleChoiceTwoChange = this.handleChoiceTwoChange.bind(this);
    this.getParent = this.getParent.bind(this);
    this.getCurrent = this.getCurrent.bind(this);
    this.getChildOne = this.getChildOne.bind(this);
    this.getChildTwo = this.getChildTwo.bind(this);
    this.clearParent = this.clearParent.bind(this);
    this.clearCurrent = this.clearCurrent.bind(this);
    this.clearChildOne = this.clearChildOne.bind(this);
    this.clearChildTwo = this.clearChildTwo.bind(this);
  }

  async componentDidMount() {
    // loads head of graph from database
    let call = await axios.get('/init')
    let response = await call
    await this.setState({
      parent: response.data.parent,
      currentNode: response.data._id,
      link: response.data.link,
      choiceOne: response.data.choiceOne,
      choiceTwo: response.data.choiceTwo,
      childOne: response.data.childOne,
      childTwo: response.data.childTwo
    })
    console.log('initial load', this.state)
    if (this.state.childOne !== undefined) {
      await this.getChildOne(this.state.childOne)
    }
    if (this.state.childTwo !== undefined) {
      await this.getChildTwo(this.state.childTwo)
    }
  }

  clearParent () {
    this.setState({
      parentNode: undefined,
      parentParent: undefined,
      parentLink: "",
      parentChoiceOne: "",
      parentChoiceTwo: "",
      parentChildOne: undefined,
      parentChildTwo: undefined
    })
  }

  clearCurrent () {
    this.setState({
      currentNode: undefined,
      parent: undefined,
      link: "",
      choiceOne: "",
      choiceTwo: "",
      childOne: undefined,
      childTwo: undefined
    })
  }

  clearChildOne () {
    this.setState({
      childOneNode: undefined,
      childOneParent: undefined,
      childOneLink: "",
      childOneChoiceOne: "",
      childOneChoiceTwo: "",
      childOneChildOne: undefined,
      childOneChildTwo: undefined
    })
  }

  clearChildTwo () {
    this.setState({
      childTwoNode: undefined,
      childTwoParent: undefined,
      childTwoLink: "",
      childTwoChoiceOne: "",
      childTwoChoiceTwo: "",
      childTwoChildOne: undefined,
      childTwoChildTwo: undefined
    })
  }




  async getParent(node) {
    let call = axios.get('/getNode?_id=' + node)
    let response = await call
    console.log('parent', response.data)
    this.setState({
      parentNode: response.data._id,
      parentParent: response.data.parent,
      parentLink: response.data.link,
      parentChoiceOne: response.data.choiceOne,
      parentChoiceTwo: response.data.choiceTwo,
      parentChildOne: response.data.childOne,
      parentChildTwo: response.data.childTwo,
    }, () => {
      console.log('parent node set', this.state.parentNode)
    })
  }

  async getCurrent(node) {
    let call = axios.get('/getNode?_id=' + node)
    let response = await call
    console.log ('current', response.data)
    this.setState({
      currentNode: response.data._id,
      parent: response.data.parent,
      link: response.data.link,
      choiceOne: response.data.choiceOne,
      choiceTwo: response.data.choiceTwo,
      childOne: response.data.childOne,
      childTwo: response.data.childTwo,
    }, () => {
      console.log('current node set', this.state.currentNode)
    })
  }

  async getChildOne(node) {
    let call = axios.get('/getNode?_id=' + node)
    let response = await call
    console.log('child one', response.data)
    this.setState({
      childOneNode: response.data._id,
      childOneParent: response.data.parent,
      childOneLink: response.data.link,
      childOneChoiceOne: response.data.choiceOne,
      childOneChoiceTwo: response.data.choiceTwo,
      childOneChildOne: response.data.childOne,
      childOneChildTwo: response.data.childTwo
    }, () => {
      console.log('childOne node set', this.state.childOneNode)
    })
  }

  async getChildTwo(node) {
    let call = axios.get('/getNode?_id=' + node)
    let response = await call
    console.log ('child two', response.data)
    this.setState({
      childTwoNode: response.data._id,
      childTwoParent: response.data.parent,
      childTwoLink: response.data.link,
      childTwoChoiceOne: response.data.choiceOne,
      childTwoChoiceTwo: response.data.choiceTwo,
      childTwoChildOne: response.data.childOne,
      childTwoChildTwo: response.data.childTwo
    }, () => {
      console.log('childTwo node set', this.state.childTwoNode)
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    // new node
    if (!this.state.currentNode) {
      // set head node on first save
      if (!this.state.parent) {
        console.log('head')
        let call = axios.post('/save', {
          head: true,
          link: this.state.link,
          parent: this.state.parent,
          choiceOne: this.state.choiceOne,
          choiceTwo: this.state.choiceTwo,
          childOne: this.state.childOne,
          childTwo: this.state.childTwo
        })
        let response = await call
        await this.setState({currentNode: response.data._id})
      } else {
        console.log('not head')
        // save non head node on first save
        let call = axios.post('/save', {
          head: false,
          parent: this.state.parent,
          link: this.state.link,
          choiceOne: this.state.choiceOne,
          choiceTwo: this.state.choiceTwo,
          childOne: this.state.childOne,
          childTwo: this.state.childTwo
        })
        let response = await call
        console.log('initial post', response.data)
        await this.setState({currentNode: response.data._id})
        if (this.state.fromChild === 'One') {
          console.log('current', this.state.currentNode)
          console.log('parent of current', this .state.parent)
          let call = axios.put('/update?_id=' + this.state.parent, {
            childOne: this.state.currentNode
          })
          let response = await call
          console.log('child one', response.data)
        } else if (this.state.fromChild === 'Two') {
          let call = axios.put('/update?_id=' + this.state.parent, {
            childTwo: this.state.currentNode
          })
          let response = await call
          console.log('child two', response.data)
        }
      }
    } else {
      // update node
      let call = axios.put('/update?_id=' + this.state.currentNode, {
        parent: this.state.parent,
        link: this.state.link,
        choiceOne: this.state.choiceOne,
        choiceTwo: this.state.choiceTwo,
        childOne: this.state.childOne,
        childTwo: this.state.childTwo
      })
      let response = await call
        console.log('put response', response.data)
    }
  }

  async handleParentClick(event) {
    // move parent node to current node
    if (!this.state.parent) {
      alert('Current node is head');
    } else {
      await this.getCurrent(this.state.parent)
    }
    await this.clearParent()
    await this.clearChildOne()
    await this.clearChildTwo()
    if (this.state.parent !== undefined) {
      await this.getParent(this.state.parent)
    }
    if (this.state.childOne !== undefined) {
      await this.getChildOne(this.state.childOne)
    }
    if (this.state.childTwo !== undefined) {
      await this.getChildTwo(this.state.childTwo)
    }
  }

  async handleChoiceClickOne(event) {
    await this.setState({fromChild: 'One'})
    if (!this.state.childOne) {
      console.log('no child one')
      let holder = this.state.currentNode
      await this.clearCurrent()
      await this.setState({parent: holder})
    } else {
      await this.getCurrent(this.state.childOne)
    }
    await this.clearParent()
    await this.clearChildOne()
    await this.clearChildTwo()
    if (this.state.parent !== undefined) {
      await this.getParent(this.state.parent)
    }
    if (this.state.childOne !== undefined) {
      await this.getChildOne(this.state.childOne)
    }
    if (this.state.childTwo !== undefined) {
      await this.getChildTwo(this.state.childTwo)
    }
  }

  async handleChoiceClickTwo(event) {
    await this.setState({fromChild: 'Two'})
    if (!this.state.childTwo) {
      let holder = this.state.currentNode
      await this.clearCurrent()
      await this.setState({parent: holder})
    } else {
      await this.getCurrent(this.state.childTwo)
    }
    await this.clearParent()
    await this.clearChildOne()
    await this.clearChildTwo()
    if (this.state.parent !== undefined) {
      await this.getParent(this.state.parent)
    }
    if (this.state.childOne !== undefined) {
      await this.getChildOne(this.state.childOne)
    }
    if (this.state.childTwo !== undefined) {
      await this.getChildTwo(this.state.childTwo)
    }
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
                    />

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
                    {this.state.childOneLink}
                  </Grid>
                  <Grid item xs={6} onClick={this.handleChoiceClickTwo}>
                    {this.state.childTwoLink}
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
                    {this.state.childOneChoiceOne}
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickOne}>
                    {this.state.childOneChoiceTwo}
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickTwo}>
                    {this.state.childTwoChoiceOne}
                  </Grid>
                  <Grid item xs={3} onClick={this.handleChoiceClickTwo}>
                    {this.state.childTwoChoiceTwo}
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