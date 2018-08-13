import { RECEIVED_TRADE } from '../actions';

const initialState = {
  "mids": [],
  "bids": [],
  "asks": [],
  "lastPrices": [],
  "lows": [],
  "highs": [],
};

export const trades = (state = initialState, action) => {
  if (action.type === RECEIVED_TRADE) {
    let trade = action.trade;

    return {
      "mids": [
        ...state.mids,
        { x: new Date(trade.timestamp).getTime(), y: trade.mid }
      ],
      "bids": [
        ...state.bids,
        { x: new Date(trade.timestamp).getTime(), y: trade.bid }
      ],
      "asks": [
        ...state.asks,
        { x: new Date(trade.timestamp).getTime(), y: trade.ask }
      ],
      "lastPrices": [
        ...state.lastPrices,
        { x: new Date(trade.timestamp).getTime(), y: trade.lastPrice }
      ],
      "lows": [
        ...state.lows,
        { x: new Date(trade.timestamp).getTime(), y: trade.low }
      ],
      "highs": [
        ...state.highs,
        { x: new Date(trade.timestamp).getTime(), y: trade.high }
      ]
    };
  }

  return state;
};
