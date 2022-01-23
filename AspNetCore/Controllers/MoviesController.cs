using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace AspNetCore
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private IMongoCollection<Movie> _moviesCollection;

        public MoviesController(IMongoClient client)
        {
            var database = client.GetDatabase("sample_mflix");
            _moviesCollection = database.GetCollection<Movie>("movies");
        }

        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _moviesCollection.Find(m => m.RunTimeInMins > 120).ToList();
        }
    }
}
