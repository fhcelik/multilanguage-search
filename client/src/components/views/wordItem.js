import React from 'react';
import PropTypes from 'prop-types'; 

const WordItem = (props) => (
  <div className = 'box'>
    <span>{props.word._id}</span>
    {/* <span>{props.word.words.word}</span> */}
  </div>
)

WordItem.propTypes = {
  word: PropTypes.object.isRequired, 
}
export default WordItem;