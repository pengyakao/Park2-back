import  * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [num, setNum] = useState(100)
  function plus() {
    setNum(function(prev){
      return prev + 200 
    })
  }
  return (
    <React.Fragment>
      {num}
      <Button variant='contained' onClick={plus}>+</Button>
    </React.Fragment>
  );
}

export default App;
