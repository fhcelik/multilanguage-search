import React from 'react';
import TextField from '@material-ui/core/TextField';


export default ({onChange,searchPhrase,onKeyDown}) => (
  
  <div className="sa">
 
  <TextField
  
  onChange={onChange} 
  onKeyDown={onKeyDown}
  value={searchPhrase}
  />
  </div>
 
);

