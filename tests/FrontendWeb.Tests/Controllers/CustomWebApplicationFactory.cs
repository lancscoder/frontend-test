using FrontendWeb.HttpClients;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Moq;

namespace FrontendWeb.Tests.Controllers
{
    public class CustomWebApplicationFactory : WebApplicationFactory<Startup>
    {
        public Mock<IBitFinexClient> MockBitFinexClient;

        public CustomWebApplicationFactory()
        {
            MockBitFinexClient = new Mock<IBitFinexClient>();
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureTestServices(services =>
            {
                services.AddScoped(provider => MockBitFinexClient.Object);
            });
        }
    }
}
