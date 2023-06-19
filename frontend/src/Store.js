import { createStoreHook } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { produtDetailsReducers, produtReducers } from './reducers/ProdectRducers';

const reducers = combineReducers({
    products:produtReducers,
    productDetails:produtDetailsReducers,
});
let initialState = {
};
const middleware =[thunk]

const store = createStore(
    reducers,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;