import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('when setting up testing', () => {
  it('should be fail',() => {
    expect(1 + 1).toBe(3);
  });
});