using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class Trip
    {
        [Key]
        public int  TripId { get; set; }

        public string ImagePath { get; set; }
        public string HotelName { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string Price { get; set; }
        public string Date { get; set; }
        public int HowLong { get; set; }

        public virtual ICollection<Asset> Assets { get; set; }
    }
}
