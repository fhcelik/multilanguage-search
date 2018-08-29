import React, { Component } from "react";
import Search from '../search';
import TextField from '@material-ui/core/TextField';
import {compose,withState,withHandlers,withStateHandlers} from 'recompose';
import { Button } from "../../../../node_modules/@material-ui/core";
import { Link } from 'react-router-dom';



const Home = ({value, onChange,onClick}) => <div>
  <TextField value={value} onChange={onChange} />
  <Link to={{ pathname: '/results', search: '?word=' +value }}><Button onClick = {onClick}>Submit</Button></Link>

</div>

const Updater = compose (
  withStateHandlers(
    () => ({value:''}), 
    {
      onChange: ({value}) => (e) => ({value: e.target.value}),
      onClick : ({value}) => () => console.log(value)
    }
   
)
);
  

export default Updater(Home);