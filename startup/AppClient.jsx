import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../store/appStore';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../routes/routes';


export default (props) => {
    const store = createStore(props);

    const history = syncHistoryWithStore(
        browserHistory,
        store
    );

    const reactComponent = (
        <Provider store={store}>
            <Router history={history} children={routes} />
        </Provider>
    );

    return reactComponent;
}