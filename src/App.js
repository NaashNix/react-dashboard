import React, { useState } from 'react';
import CustomerPage from './components/CustomerPage';
import Dashboard from './components/Dashboard';


function App() {

  const [visibility, setVisibility] = useState(true);
  const [csVisibility, setCsVisibility] = useState(false);

  const appClicked = () => {
    setVisibility(false);
    setCsVisibility(true);
  };

  const backButtonClicked = () => {
    setVisibility(true);
    setCsVisibility(false);
  }

  return (
    <div>
      <Dashboard onclick={appClicked} visibility={visibility} />
      <CustomerPage onclick={backButtonClicked} visibility={csVisibility} />
    </div>
  );
}

export default App;
