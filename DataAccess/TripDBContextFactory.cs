using System;
using System.Collections.Generic;
using System.IO;
using DataAccess.Data;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;


namespace DataAccess.Database
{
        public class TripDBContextFactory : IDesignTimeDbContextFactory<TripDBContext>
        {
            public TripDBContext CreateDbContext(string[] args)
            {
                IConfiguration configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();


                var optionsBuilder = new DbContextOptionsBuilder<TripDBContext>();
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("TripDBConnection"));

                return new TripDBContext(optionsBuilder.Options);

                
                }
            }

}

