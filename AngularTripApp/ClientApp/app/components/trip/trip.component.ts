import { Component } from '@angular/core';
import { TripService } from '../../services/trip.service';


@Component({
    selector: 'trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.css'],
})
export class TripComponent {

    trips: BaseExampleAngularCore.Model.ITrip[];

    test: any;  

    tripService: TripService;
    
    constructor(tripService: TripService) {

        var vm = this;

        this.tripService = tripService;

        vm.GetTrips();


        this.tripService.listen().subscribe((m: any) => {
            // TODO check m for filter in future
            if (m == "refreshTrips") {
                this.GetTrips();
            }
       
        });
     

    }



    GetTrips() {
        this.tripService.getAllTrip().subscribe((trips: BaseExampleAngularCore.Model.ITrip[]) => {
            this.trips = trips;
        })
    }

}
