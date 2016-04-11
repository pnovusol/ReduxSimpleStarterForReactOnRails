import Immutable from 'immutable';


export const $$initialState = Immutable.fromJS({
    // initial state goes here
});

export default function appReducer($$state = $$initialState, action) {
    const { type } = action;

    switch (type) {
        default:
            return $$state;
    }
}