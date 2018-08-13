using FrontendWeb.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace FrontendWeb.HttpClients
{
    public class BitFinexClient : IBitFinexClient
    {
        private HttpClient _client;

        public BitFinexClient(HttpClient client)
        {
            _client = client;
            _client.BaseAddress = new Uri("https://api.bitfinex.com");
        }

        public async Task<Trade> GetLatestBtcGbp()
        {
            var btcGbpUrl = new Uri("/v1/pubticker/btcgbp", UriKind.Relative);
            var res = await _client.GetAsync(btcGbpUrl);

            var trade =  await res.Content.ReadAsAsync<BitFinexTrade>();

            return new Trade {
        Mid = trade.mid,
        Bid = trade.bid,
        Ask = trade.ask,
        LastPrice = trade.last_price,
        Low = trade.low,
        High = trade.high,
        Volume = trade.volume,
        Timestamp = trade.timestamp,
            };
        }
    }
}
