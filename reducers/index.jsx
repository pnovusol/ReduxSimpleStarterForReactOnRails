import appReducer from './appReducer';
import { $$initialState as $$appState } from './appReducer'

export default {
    $$appStore: appReducer
}

export const initialStates = {
    $$appState
};