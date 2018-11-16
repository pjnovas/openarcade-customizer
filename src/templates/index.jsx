import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

export default store => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, 
    document.getElementById('templates')
  );
}
