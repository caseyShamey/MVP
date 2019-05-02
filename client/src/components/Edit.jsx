import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Test",
      isInEditMode: false
    }

    this.changeEditMode = this.changeEditMode.bind(this);
    this.renderEditView = this.renderEditView.bind(this);
    this.renderDefaultView = this.renderDefaultView.bind(this);
  }

  changeEditMode = () => {
    
  }
}