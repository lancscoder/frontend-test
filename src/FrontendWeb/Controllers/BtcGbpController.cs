using Microsoft.AspNetCore.Mvc;
using FrontendWeb.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using FrontendWeb.HttpClients;

namespace FrontendWeb.Controllers
{
    [Route("api/btcgbp")]
    [ApiController]
    public class BtcGbpController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<Trade>> Get([FromServices]IBitFinexClient client)
        {
            var trade = await client.GetLatestBtcGbp();

            return Ok(trade);
        }
    }
}
