import React, { Component } from "react";
import { Link } from 'react-router-dom'
  
  const Result = () => (
      <div id="result">
        This is the contact me page.
        <Link to={`/`}>Home</Link>
      </div>
    );

export default Result;