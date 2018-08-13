export const RECEIVED_TRADE = 'RECEIVE_TRADE';

export const actions = {
  requestApiTrade: async () => {
    const url = "api/btcgbp";
    const response = await fetch(url);
    const trade = await response.json();

    return { type: RECEIVED_TRADE, trade };
  },

  requestFakeTrade: async () => {
    const url = "api/fakebtcgbp";
    const response = await fetch(url);
    const trade = await response.json();

    return { type: RECEIVED_TRADE, trade };
  },

  requestTradeWithCors: async () => {
    const url = "https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/pubticker/btcgbp";
    const response = await fetch(url);
    const responseTrade = await response.json();

    const trade = {
      "mid": Number(responseTrade.mid),
      "bid": Number(responseTrade.bid),
      "ask": Number(responseTrade.ask),
      "lastPrice": Number(responseTrade.last_price),
      "low": Number(responseTrade.low),
      "volume": Number(responseTrade.volume),
      "high": Number(responseTrade.high),
      "timestamp": Number(responseTrade.timestamp)
    };

    return { type: RECEIVED_TRADE, trade };
  }
};