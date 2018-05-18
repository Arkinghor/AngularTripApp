module BaseExampleAngularCore.Model {
    'use strict';

    export interface ITrip {
        ImagePath: string;
        HotelName: string,
        Country: string,
        Region: string,
        Assets: string[],
        Price: string,
        Date: string,
        HowLong:string,
        UrlBooking: string,
        UrlCheckDetails: string;
    }
}