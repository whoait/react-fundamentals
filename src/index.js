import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

function Sum(props){
  return <h1> 
    {props.a} + {props.b} = {props.a + props.b }
  </h1>
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired
}
ReactDOM.render(<Sum a = {'key'} b = {'xx'} />, document.getElementById('root'));
registerServiceWorker();
