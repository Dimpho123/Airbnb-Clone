import {createStore, combineReducers, applyMiddleware} from 'redux';
import  { thunk }  from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { listingListReducer } from './reducers/listingReducers';
import { modalReducer } from './reducers/modalReducer'

const reducer = combineReducers({ listingList: listingListReducer, modal: modalReducer });

const initialState = {}; 

const middleware = [thunk];

const store = createStore(
reducer, 
    initialState,
     composeWithDevTools(applyMiddleware(...middleware))
    );
console.log("Store state:", store.getState());
    export default store;