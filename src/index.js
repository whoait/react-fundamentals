import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample } from 'underscore';
import { stat } from 'fs';


const authors=[
  {
    name: 'Hoavv',
    imageUrl: './girl.jpg',
    imageSource: 'hoavv',
    books: ['This is a girl',
            'This is a car',
            'This is a cat']
  },
  {
    name: 'Hoavv1',
    imageUrl: './girl.jpg',
    imageSource: 'hoavv',
    books: ['This is a girl',
            'This is a car',
            'This is a cat']
  },
  {
    name: 'Hoavv2',
    imageUrl: './girl.jpg',
    imageSource: 'hoavv',
    books: ['This is a girl',
            'This is a car',
            'This is a cat']
  }
];

function getTurnData(authors){
  const allBooks = authors.reduce(function(p, c, i){
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = fourRandomBooks[0];
  

  return {
    books: fourRandomBooks,
    authors: authors.find((author) => 
        author.books.some((title) => 
        title === answer))
  }
}

function reducer(state = {authors, turnData: getTurnData(authors), highlight: ''}, 
  action) {
    switch(action.type){
      case 'ANSWER_SELECTED':
        const isCorrect =state.turnData.author.books.some((book)=> book === action);
        return Object.assign(
          {}, 
          state, 
          { highlight: isCorrect ? 'correct': 'wrong'
          });
      case 'CONTINUE':
        return Object.assign({}, state, {
          highlight: '',
          turnData: getTurnData(state.authors)
        });
      case 'ADD_AUTHOR':
        return Object.assign({}, state, {
          authors: state.authors.concat([action.author])
        })
      default: return state;

    }
  return state;
}

 /* eslint-disable no-underscore-dangle */
  let store = Redux.createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 /* eslint-enable */


ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store = {store}>
      <React.Fragment> 
        <Route exact path="/" component = {AuthorQuiz} />
        <Route path="/add" component = {AddAuthorForm} />
      </React.Fragment>
    </ReactRedux.Provider>
  </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
