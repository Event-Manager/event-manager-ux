import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      responsable: '',
      description: ''
    };
    this.defineBinders();
  }

  defineBinders() {
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeResponsable = this.handleChangeResponsable.bind(this);
    this.handleChangeEventType = this.handleChangeEventType.bind(this);
    this.handleChangeOffice = this.handleChangeOffice.bind(this);
    this.handleChangeParticipants = this.handleChangeParticipants.bind(this);
    this.handleChangeEventyHour = this.handleChangeEventyHour.bind(this);
    this.handleChangeEventDate = this.handleChangeEventDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEventName(event) {
    this.setState({ eventName: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeResponsable(event) {
    this.setState({ responsable: event.target.value });
  }

  handleChangeParticipants(event) {
    this.setState({ participants: event.target.value });
  }

  handleChangeEventType(event, index, value) {
    this.setState({ eventType: value });
  }

  handleChangeOffice(event, index, value) {
    this.setState({ office: value });
  }

  handleChangeEventyHour(event, value) {
    this.setState({ eventHour: value });
  };

  handleChangeEventDate(event, date) {
  this.setState({ eventDate: date });
};

handleSubmit() {
  const params = this.state;

  params.date = this.convertDate(params);
  // momentjs
  // console.log(JSON.stringify({events_request: {name: "Event name", description: "Description event"}}));

  //
  // const parameters = this.state;
  // const myRequest = new Request('https://event-manager-api-deploy.herokuapp.com/events_requests',
  //   {method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: myBody});
  // console.log(myRequest.url, myRequest.method, myRequest.body);

    fetch('/api/v0/events_requests', {
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: `{"events_request": ${params}}`
    })
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson))
  .catch((error) => console.log(error));
}

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="Event name"
            floatingLabelText="Python Meetup"
            value={this.state.eventName}
            onChange={this.handleChangeEventName}
          /><br />
          <TextField
            hintText="Description"
            floatingLabelText="In this event we are going to talk about..."
            multiLine={true}
            rows={5}
            value={this.state.description}
            onChange={this.handleChangeDescription}
          /><br />
          <TextField
            hintText="Responsable"
            floatingLabelText="Jane Doe"
            value={this.state.responsable}
            onChange={this.handleChangeResponsable}
          /><br />
          <DatePicker
          hintText="Event date"
          mode="landscape"
          value={this.state.eventDate}
          onChange={this.handleChangeEventDate}
          />
          <TimePicker
            hintText="10 minutes step"
            minutesStep={10}
            value={this.state.eventHour}
            onChange={this.handleChangeEventyHour}
          /><br />
          <TextField
            hintText="Quantity of participants"
            floatingLabelText="40"
            value={this.state.participants}
            onChange={this.handleChangeParticipants}
          /><br />
          <SelectField
            floatingLabelText="Event type"
            value={this.state.eventType}
            onChange={this.handleChangeEventType}
            >
            <MenuItem value={1} primaryText="Meetup" />
            <MenuItem value={2} primaryText="Lunch and Learn" />
          </SelectField>
          <br />
          <SelectField
            floatingLabelText="Office"
            value={this.state.office}
            onChange={this.handleChangeOffice}          >
            <MenuItem value={1} primaryText="Belo Horizonte" />
          </SelectField>
          <br />

          <RaisedButton label="Submit" primary={true} onClick = {this.handleSubmit}/>
          <br />`
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
