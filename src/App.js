import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';

Amplify.configure(amplify_config);

function App() {
  return (
    <div className="App">
      <h1>My React Cognito App</h1>
    </div>
  );
}

export default App;