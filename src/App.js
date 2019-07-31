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
          <h2>React PWA Upload Issue</h2>
        </div>

        <div class="upload-wrapper">
          <label htmlFor="imageUpload">Upload Image</label>
          <input id="imageUpload"
                 name="imageUpload"
                 type="file"
                 accept="image/*"
                 onChange={this.handleUploadImage} />
        </div>

        <div class="test-wrapper">
          <div class="test-title">Test #1: Works Perfectly (Expected Behaviour)</div>
          <div class="test-steps-works">
            <div>Visit https://pwa-react.netlify.com/ from iPhone in mobile safari</div>
            <div>1. Make sure you have google drive on the phone but not logged in.</div>
            <div>2. Click "Choose File". It will show you the list of options to choose from.</div>
            <div>3. Click "Browse" to look for the photo.</div>
            <div>4. Click "Cancel" and you're back here.</div>
            <div>5. Click "Choose File" it will still show you the list of options to choose from. This works perfectly in mobile safari NOT in PWA mode.</div>
          </div>
        </div>

        <div class="test-wrapper">
          <div class="test-title">Test #2: Does NOT Work (Unexpected Behaviour)</div>
          <div class="test-steps-issue">
            <div>Visit https://pwa-react.netlify.com/ from iPhone in mobile safari, hit the share button, then add to home screen. This will add the PWA app on your phone.</div>
            <div>1. Make sure you have google drive on the phone but not logged in.</div>
            <div>2. Click "Choose File" in PWA app. It will show you the list of options to choose from.</div>
            <div>3. Click "Browse" to look for the photo.</div>
            <div>4. When it shows you the Google Drive logo with Sign In, double click the home button, then go back to the PWA.</div>
            <div>5. Click "Choose File" it will NOT show you the list of options to choose from. This is now 100% broken.</div>
            <div>The ONLY way to fix it is to go to Settings>Safari>Clear History and Website Data (all the way down)</div>
            <div>How can we fix this so when the user hits "Choose File" it shows the list of options to choose from in the PWA?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
