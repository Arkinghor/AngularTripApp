using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataAccess.Models
{
    public class Asset
    {
        public int AssetId { get; set; }
        public string AssetValue { get; set; }
        public int TripId { get; set; }

        public virtual Trip Trip { get; set; }
    }
}
