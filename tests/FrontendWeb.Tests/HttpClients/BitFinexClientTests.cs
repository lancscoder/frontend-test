using Moq;
using System;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using FrontendWeb.HttpClients;

namespace FrontendWeb.Tests.HttpClients
{
    public partial class BitFinexClientTests
    {
        const string apiResponse = "{\"mid\":\"4812.95\",\"bid\":\"4812.9\",\"ask\":\"4813.0\",\"last_price\":\"4797.1\",\"low\":\"4796.1\",\"high\":\"5496.93478068\",\"volume\":\"382.91641429000015\",\"timestamp\":\"1533753267.558543\"}";

        [Fact]
        public async Task GetLatestBtcGbp_ShouldCallTheApi()
        {
            var httpResponseMessage = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
            httpResponseMessage.Content = new StringContent(apiResponse, Encoding.UTF8, "application/json");

            var fakeResponseHandler = new FakeResponseHandler(httpResponseMessage);

            var client = new BitFinexClient(new HttpClient(fakeResponseHandler));

            var response = await client.GetLatestBtcGbp();

            Assert.Equal(4812.95, response.Mid);

            Assert.Equal(new Uri("https://api.bitfinex.com/v1/pubticker/btcgbp"), fakeResponseHandler.HttpRequestMessage.RequestUri);
        }
    }
}
