import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';

import { routerReducer } from 'react-router-redux';

export default props => {
    const { $$appState } = initialStates;

    const initialState = {
        $$appStore: $$appState.merge({})
    };

    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    const composedStore = compose(
        applyMiddleware(thunkMiddleware),
        
        // React devTools
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    const storeCreator = composedStore(createStore);
    const store = storeCreator(reducer, initialState);

    return store;
}