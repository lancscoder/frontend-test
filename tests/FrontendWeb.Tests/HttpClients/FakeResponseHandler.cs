using System.Net.Http;
using System.Threading.Tasks;

namespace FrontendWeb.Tests.HttpClients
{
    public partial class BitFinexClientTests
    {
        public class FakeResponseHandler : DelegatingHandler
        {
            private readonly HttpResponseMessage _fakeResponseMessage;
            public HttpRequestMessage HttpRequestMessage;

            public FakeResponseHandler(HttpResponseMessage fakeResponseMessage)
            {
                _fakeResponseMessage = fakeResponseMessage;
            }

            protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, System.Threading.CancellationToken cancellationToken)
            {
                HttpRequestMessage = request;
                return Task.FromResult(_fakeResponseMessage);
            }
        }
    }
}
