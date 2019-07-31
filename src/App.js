import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleUploadImage = e => {
    var file = e.target.files[0];
    alert(e.target.files[0]);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <label htmlFor="imageUpload">Upload Image</label>
          <input id="imageUpload"
                 name="imageUpload"
                 type="file"
                 accept="image/*"
                 onChange={this.handleUploadImage} />
        </div>
      </div>
    );
  }
}

export default App;
