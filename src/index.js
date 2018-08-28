import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample } from 'underscore';

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

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};

ReactDOM.render(<AuthorQuiz  {...state} />, document.getElementById('root'));
registerServiceWorker();
