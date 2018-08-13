import { RECEIVED_TRADE } from '../actions';

const initialState = { current: undefined, previous: undefined };

export const summary = (state = initialState, action) => {
  if (action.type === RECEIVED_TRADE) {
    return {
        current: action.trade.lastPrice,
        previous: state.current
    };
  }

  return state;
};
