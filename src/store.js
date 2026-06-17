import {createStore, combineReducers, applyMiddleware} from 'redux';
import  { thunk }  from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { listingListReducer } from './reducers/listingReducers';
import { modalReducer } from './reducers/modalReducer'
import { userLoginreducer } from './reducers/userReducer'

const reducer = combineReducers({ 
    listingList: listingListReducer, 
    modal: modalReducer, 
userLogin: userLoginreducer, 
});

const userInfoFromLS = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
    userLogin: { userInfo: userInfoFromLS },
}; 

const middleware = [thunk];

const store = createStore(
reducer, 
    initialState,
     composeWithDevTools(applyMiddleware(...middleware))
    );
console.log("Store state:", store.getState());
    export default store;