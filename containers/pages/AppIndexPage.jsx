import React from 'react';
import HelloWorldWidget from '../../components/HelloWorldWidget'

export default class AppIndexPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                App Index Page
                <HelloWorldWidget />
            </div>
        )
    }
}
