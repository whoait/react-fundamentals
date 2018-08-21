import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';

function Sum(props){
  return <h1> 
    {props.a} + {props.b} = {props.a + props.b }
  </h1>
}
ReactDOM.render(<Sum a = {'key'} b = {'board'} />, document.getElementById('root'));
registerServiceWorker();
