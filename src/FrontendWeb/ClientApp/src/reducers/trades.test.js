import { trades } from './trades';

describe('trades reducer ::', () => {
    it('should handle RECEIVE_TRADE', () => {
        let tradeTime = new Date(1534184995766.1016).getTime()
        let initialData = {
            "mids": [{ x: tradeTime, y: 1 }],
            "bids": [{ x: tradeTime, y: 2 }],
            "asks": [{ x: tradeTime, y: 3 }],
            "lastPrices": [{ x: tradeTime, y: 4 }],
            "lows": [{ x: tradeTime, y: 5 }],
            "highs": [{ x: tradeTime, y: 6 }],
        };
        let newTrade = {
            "mid": 8,
            "bid": 9,
            "ask": 10,
            "lastPrice": 11,
            "low": 12,
            "high": 13,
            "timestamp": 1534184995778.1016
        };

        let result = trades(initialData, {
            type: 'RECEIVE_TRADE', trade: newTrade
        });

        expect(result.mids.length).toBe(2);
    });
});