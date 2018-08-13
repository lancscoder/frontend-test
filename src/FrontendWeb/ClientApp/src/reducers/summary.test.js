import { summary } from './summary';

describe('summary reducer ::', () => {
    it('should handle RECEIVE_TRADE', () => {
        expect(
            summary({ current: 1, previous: 2 }, {
                type: 'RECEIVE_TRADE',
                trade: {
                    lastPrice: 3
                }
            })
        ).toEqual({
            current: 3,
            previous: 1
        });
    });
});