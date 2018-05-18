using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Data;
using DataAccess.Models;

namespace RepositoryCommon
{
    public class Repository : IRepository
    {
        private TripDBContext context;


        public Repository(TripDBContext context)
        {
            this.context = context;
        }

        public bool AddTrip(Trip trip)
        {
            try
            {
                context.Trips.Add(trip);
                context.SaveChanges();
                return true;
            }
            catch(Exception e)
            {
                //TODO add logger
                return false;
            }
      
        }

        public List<Trip> GetAllTrips()
        {
            return context.Trips.GroupJoin(context.Assets,
                trip => trip.TripId,
                asset => asset.TripId,
                (trip, asset) => new Trip{
                    TripId = trip.TripId,
                    ImagePath = trip.ImagePath,
                    Country = trip.Country,
                    Date = trip.Date,
                    HotelName = trip.HotelName,
                    HowLong = trip.HowLong,
                    Price = trip.Price,
                    Region = trip.Region,
                    Assets = asset.ToList()}).OrderByDescending(x => x.TripId).ToList();
        }
    }
}
