using System.Collections.Generic;

namespace FrontendWeb.HttpClients
{
    public class BitFinexTrade
    {
        public double mid { get; set; }
        public double bid { get; set; }
        public double ask { get; set; }
        public double last_price { get; set; }
        public double low { get; set; }
        public double high { get; set; }
        public double volume { get; set; }
        public double timestamp { get; set; }
    }
}
