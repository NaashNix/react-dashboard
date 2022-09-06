import React, { useState } from 'react';
import Form from './components/CustomerForm/Form';
import Dashboard from './components/Dashboard';


function App() {

  const [visibility, setVisibility] = useState(true);

  const appClicked = () => {
    setVisibility(false);
  };

  return (
    <div>
      {/* <Dashboard onClick={appClicked} visibility={visibility} /> */}
      <Form />
    </div>
  );
}

export default App;
