import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppPage from '../components/App';

export default (
    <Route path="/">
        <IndexRoute component={AppPage} />
    </Route>
)