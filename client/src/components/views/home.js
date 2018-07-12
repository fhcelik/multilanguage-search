import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
 
  const Home = () => (
      <div id="home">
        <SearchBar
          dataSource={state.dataSource}
          onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <Link to={`/results`}>Results</Link>
      </div>
    );


export default Home;