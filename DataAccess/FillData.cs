using DataAccess.Data;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace DataAccess
{
    public class FillData
    {
        public static void Main()
        {
            IConfiguration configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();


            var optionsBuilder = new DbContextOptionsBuilder<TripDBContext>();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("TripDBConnection"));


            using (var db = new TripDBContext(optionsBuilder.Options))
            {
                List<Trip> trips = new List<Trip>()
                {
                    new Trip
                    {
                        HotelName = "hotel avalon",
                        ImagePath = "../../../../Upload/CFUKAMA.jpg",
                        Country = "greece",
                        Region = "pelopenez",
                        Assets = new List<Asset>()
                    {
                         new Asset (){AssetValue="wypoczynek z rodziną" }
                        ,new Asset(){AssetValue="basen ze zjeżdżalniami" }
                        ,new Asset(){AssetValue="nowoczesne pokoje" }
                        ,new Asset(){AssetValue="spokojna okolica" }
                        ,new Asset(){AssetValue="odnowiony w 2015 r." }
                        ,new Asset(){AssetValue="ekskluzywne spa" }

                    },
                        Price = "1500 zł/os",
                        Date = DateTime.UtcNow.ToString("dd-mm-yyyy"),
                        HowLong = 8
                    }
                    ,new Trip
                    {
                        HotelName = "hotel avalon",
                        ImagePath = "../../../../Upload/CFUKAMA.jpg",
                        Country = "greece",
                        Region = "pelopenez",
                        Assets = new List<Asset>()
                    {
                         new Asset (){AssetValue="romantyczne wakacje centrum Kissamos i blisko 2 plaż"}
                        ,new Asset(){AssetValue="studio z aneksem kuchennym" }
                        ,new Asset(){AssetValue="na życzenie laptop z internetem bezprzewodowym"}
                        ,new Asset(){AssetValue="bar przy basenie" }
                    },
                        Price = "1500 zł/os",
                        Date = DateTime.UtcNow.ToString("dd-mm-yyyy"),
                        HowLong = 8
                    }
                    ,new Trip
                    {
                        HotelName = "hotel avalon",
                        ImagePath = "../../../../Upload/CFUKAMA.jpg",
                        Country = "greece",
                        Region = "pelopenez",
                        Assets = new List<Asset>()
                    {
                         new Asset (){AssetValue="polecany dla rodzin" }
                        ,new Asset(){AssetValue="wygodne, 4-os. pokoje" }
                        ,new Asset(){AssetValue="bajkowy widok na morze" }
                        ,new Asset(){AssetValue="blisko centrum" }

                    },
                        Price = "1500 zł/os",
                        Date = DateTime.UtcNow.ToString("dd-mm-yyyy"),
                        HowLong = 8
                    }
                    ,new Trip
                    {
                        HotelName = "hotel avalon",
                        ImagePath = "../../../../Upload/CFUKAMA.jpg",
                        Country = "greece",
                        Region = "pelopenez",
                        Assets = new List<Asset>()
                    {
                         new Asset (){AssetValue= "blisko centrum i plaży"}
                        ,new Asset(){AssetValue="wieczory tematyczne" }
                        ,new Asset(){AssetValue="swobodna atmosfera" }
                        ,new Asset(){AssetValue="baza wypadowa do zwiedzania wyspy" }
                    },
                        Price = "1500 zł/os",
                        Date = DateTime.UtcNow.ToString("dd-mm-yyyy"),
                        HowLong = 8
                    }
                    ,new Trip
                    {
                        HotelName = "hotel avalon",
                        ImagePath = "../../../../Upload/CFUKAMA.jpg",
                        Country = "greece",
                        Region = "pelopenez",
                        Assets = new List<Asset>()
                    {
                         new Asset (){AssetValue= "wypoczynek z rodziną" }
                        ,new Asset(){AssetValue= "propozycja dla aktywnych" }
                        ,new Asset(){AssetValue= "piaszczysta plaża"}
                        ,new Asset(){AssetValue= "blisko Koryntu i Loutraki"}
                        ,new Asset(){AssetValue= "bar na plaży" }
                        ,new Asset(){AssetValue= "komfortowe pokoje" }

                    },
                        Price = "1500 zł/os",
                        Date = DateTime.UtcNow.ToString("dd-mm-yyyy"),
                        HowLong = 8
                    }

            };

                db.Trips.AddRange(trips);
                db.SaveChanges();
            }
        }
    }
}
