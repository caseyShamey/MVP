import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Node, nodesArray } from './helpers.js';

class Editor extends Component {

  state = {
  }

  constructor(props) {
    super(props)
    this.getCyoa()
  }

  getCyoa = () => {
    // get call to db with async call
  }

  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <TextField style={{padding: 24}}
  //           id=""
  //       </div>
  //     </div>
  //   )
  // }
}