import React, { Component } from "react";
import { Link } from 'react-router-dom';

 
  const Home = () => (
      <div id="home">
        This is the home page.
        <Link to={`/results`}>Results</Link>
      </div>
    );


export default Home;