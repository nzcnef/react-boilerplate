import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Site from './layouts/Site.jsx';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/"  component={Site}/>
      </Switch>
    </Router>
  </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
