using FrontendWeb.Models;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace FrontendWeb.Tests.Controllers
{
    public class BtcGbpControllerTests : IClassFixture<CustomWebApplicationFactory>
    {
        private readonly CustomWebApplicationFactory _factory;

        public BtcGbpControllerTests(CustomWebApplicationFactory factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task Get_ReturnsATradee()
        {
            var client = _factory.CreateClient();
            _factory.MockBitFinexClient.Setup(c => c.GetLatestBtcGbp())
                .Returns(() => Task.FromResult(new Trade()))
                .Verifiable();

            var response = await client.GetAsync("/api/btcgbp");

            Assert.Equal(HttpStatusCode.OK, response.StatusCode);

            var trade = await response.Content.ReadAsAsync<Trade>();

            _factory.MockBitFinexClient.VerifyAll();
        }
    }
}
