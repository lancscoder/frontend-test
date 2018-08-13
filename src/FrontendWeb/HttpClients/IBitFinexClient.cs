using System.Collections.Generic;
using System.Threading.Tasks;
using FrontendWeb.Models;

namespace FrontendWeb.HttpClients
{
    public interface IBitFinexClient
    {
        Task<Trade> GetLatestBtcGbp();
    }
}