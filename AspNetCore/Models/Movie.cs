using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AspNetCore
{
    [BsonIgnoreExtraElements]
    public class Movie
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("year")]
        public int Year { get; set; }

        [BsonElement("runtime")]
        public int RunTimeInMins { get; set; }

        [BsonElement("poster")]
        public string ImageSrc { get; set; }

        // [BsonExtraElements]
        // public object[] Bucket { get; set; }
        // public int MyProperty { get; set; }
        // public int MyProperty { get; set; }
        // public int MyProperty { get; set; }
        // public int MyProperty { get; set; }
    }
}
