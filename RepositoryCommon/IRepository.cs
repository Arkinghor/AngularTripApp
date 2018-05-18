using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryCommon
{
    public interface IRepository
    {
        List<Trip> GetAllTrips();

        bool AddTrip(Trip trip);
    }
}
