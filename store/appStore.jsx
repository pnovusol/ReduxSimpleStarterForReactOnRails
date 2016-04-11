import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
    const { $$appState } = initialStates;

    const initialState = {
        $$appStore: $$appState.merge({})
    };

    const reducer = combineReducers(reducers);
    const composedStore = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware),
        
        // React devTools
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    const storeCreator = composedStore(createStore);
    const store = storeCreator(reducer, initialState);

    return store;
}