import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/appStore';
import App from '../components/App';

export default (props) => {
    const store = createStore(props);
    const reactComponent = (
        <Provider store={store}>
            <App />
        </Provider>
    );

    return reactComponent;
}