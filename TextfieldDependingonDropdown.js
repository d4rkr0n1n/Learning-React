import React from 'react';
import TextField from '@material-ui/core/TextField';

import 'react-dropdown/style.css';
import { MenuItem, Select } from '@material-ui/core';

function App() {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{display:"flex", flexdirection:"row"}}>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      <TextField value={age}/>

    </div>
  );

  
    
}


export default App;
