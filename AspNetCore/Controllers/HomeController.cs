using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace AspNetCore.Controllers
{
    public class HomeController : Controller
    {
        private IMongoDatabase database;
        private IMongoCollection<Movie> moviesCollection;
        public HomeController(IConfiguration Configuration)
        {
            MongoClient client = new MongoClient(Configuration["MyKey"]);
            database = client.GetDatabase("sample_mflix");
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        public ActionResult Index()
        {
            moviesCollection = (IMongoCollection<Movie>)database.GetCollection<Movie>("movies").Find(m => m.RunTimeInMins > 120).ToList();
            return View(moviesCollection);
        }
    }
}
