import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let model = {click: 0};
function render(){
    ReactDOM.render(<App 
                        clicks= {model.click} 
                        onClick={()=>{model.click +=1; render(); }
                    }/>, document.getElementById('root'));
}
render();
registerServiceWorker();
