import { combineReducers } from 'redux';
import { settings } from './settings';
import { summary } from './summary';
import { trades } from './trades';

export default combineReducers({
    settings,
    summary,
    trades
});
