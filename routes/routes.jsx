import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../containers/layout/Layout';

import AppIndexPage from '../containers/pages/AppIndexPage';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={AppIndexPage} />
    </Route>
)