import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function(inittialState = {}) {
  const logger = createLogger({
    collapsed: true,
    diff: true
  });

  // Middleware and store enhancers
  const enhancer = [thunk];

  if (process.env.NODE_ENV === 'production') {
    enhancer.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...enhancer);

  let store;

  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      rootReducer,
      inittialState,
      compose(middlewareEnhancer)
    );
  } else {
    store = createStore(
      rootReducer,
      inittialState,
      composeWithDevTools(middlewareEnhancer)
    );
  }
}