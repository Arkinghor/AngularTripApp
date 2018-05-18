using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data
{
    public class TripDBContext: DbContext
    {
        public TripDBContext(DbContextOptions<TripDBContext> options) :base(options)
        {
        }

        public DbSet<Trip> Trips { get; set; }
        public DbSet<Asset> Assets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asset>().ToTable("Assets");
            modelBuilder.Entity<Trip>().ToTable("Trips");
        }

    }
}
