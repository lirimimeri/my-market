import { combineReducers } from 'redux';

import settingsReducer from './settings.reducer.js';
import themesReducer from './themes.reducers.js';
import profitsReducer from './profits.reducer'

export default combineReducers({
    settings: settingsReducer,
    theme: themesReducer,
    profits: profitsReducer
});
