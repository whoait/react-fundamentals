import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {shallow} from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';


function Hello(props) {
  return <h1> Hello at {props.now} </h1>
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const moment = new Date(242424242);

describe('when setting directly', () => {
  let result;
  beforeAll(() => {
    result = Hello({now: moment.toString() });
  })

  it('return a value',() => {
    expect(result).not.toBeNull();
  });

  it('is a h1', ()=> {
    expect(result.type).toBe('h1');
  });

  it('has children', () => {
    expect(result.props.children).toBeTruthy();
  });

});

describe('When testing with ReactDom',() => {
  it('render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now = {moment.toISOString()}/>, div);
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe('When testing with Enzyme', () => {
  it('render a h1', () => {
    const warper = shallow(<Hello now= {moment.toISOString()} />);
    expect(warper.find('h1').length).toBe(1);
  });

  it('contains Hello at xffsfsf ', () => {
    const warper = shallow(<Hello now= {moment.toISOString()} />);
    expect(warper.contains(<h1>Hello </h1>)).toBe(false);
  });
});