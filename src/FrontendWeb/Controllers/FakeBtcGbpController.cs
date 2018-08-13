using Microsoft.AspNetCore.Mvc;
using FrontendWeb.Models;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using FrontendWeb.HttpClients;

namespace FrontendWeb.Controllers
{
    [Route("api/fakebtcgbp")]
    [ApiController]
    public class FakeBtcGbpController : ControllerBase
    {
        private static Random _random = new Random();

        [HttpGet]
        public ActionResult<Trade> Get()
        {
            var trade = new Trade {
                Mid = 4891.75,
                Bid = 4891.7,
                Ask = 4891.8,
                LastPrice = _random.Next(4759, 5237),
                Low = 4759.2,
                High = 5237.3,
                Volume = 352.717,
                Timestamp = DateTime.Now.Subtract(new DateTime(1970, 1,1)).TotalMilliseconds
            };

            return Ok(trade);
        }
    }
}