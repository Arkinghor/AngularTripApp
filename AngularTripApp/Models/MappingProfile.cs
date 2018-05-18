using AutoMapper;
using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTripApp.Models
{
    public class MappingProfile:Profile
    {
        private object mapper;

        public MappingProfile()
        {
            CreateMap<Trip, TripModel>()
                .ForMember(dest => dest.Assets,
                opt => opt.MapFrom(src => src.Assets.Select(x => x.AssetValue)));

            CreateMap<string, Asset>()
                .ForMember(dest => dest.AssetValue,
                opt => opt.MapFrom(src => new Asset
                {
                    AssetValue = src
                }));


            CreateMap<TripModel, Trip>()
               .ForMember(dest => dest.Assets,
               opts => opts.Ignore());
        }
    }
}
