import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from './middlewares/thunk';
import combinedReducer from './combinedReducer';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(combinedReducer, composeEnhancers);
export default store;
