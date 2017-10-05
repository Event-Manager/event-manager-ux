import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TextField
          hintText="Event name"
          floatingLabelText="Python Meetup"
        /><br />
        <TextField
          hintText="Description"
          floatingLabelText="In this event we are going to talk about..."
          multiLine={true}
          rows={5}
        /><br />
        <TextField
          hintText="Responsable"
          floatingLabelText="Jane Doe"
        />
        <DatePicker hintText="Event date" mode="landscape" />
        <TimePicker
          hintText="10 minutes step"
          minutesStep={10}
        />
        <TextField
          hintText="Quantity of participants"
          floatingLabelText="40"
        />
        <SelectField
          floatingLabelText="Event type"
          value={1}
          onChange={() => true}
          >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Office"
          value={1}
          onChange={() => true}
          >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <br />

        <RaisedButton label="Submit" primary={true} />

      </MuiThemeProvider>
    );
  }
}

export default App;
