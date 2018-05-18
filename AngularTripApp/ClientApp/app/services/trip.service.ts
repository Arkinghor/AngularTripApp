import { Injectable, Inject } from "@angular/core";
import { Http, Response } from '@angular/http'; 
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";


export interface ITripService {
    getAllTrip(): Observable<BaseExampleAngularCore.Model.ITrip[]>

    headers: Headers;

    getTripToEdit(): any//Observable<AngularCore.Model.ITrip[]>

}


@Injectable()


export class TripService implements ITripService{

    headers: Headers;

    baseUrl: any;

    listners: Subject<any>;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.listners = new Subject<any>();
        this.baseUrl = baseUrl;
    }

    getTripToEdit() {
        return 'test';
        //return this.http.get('http://localhost:55980/api/edit/GetTripsForEdit').subscribe((res: Response) => {
        //    return <AngularCore.Model.ITrip[]>res.json()
        //});
    } 

    AddTrip(trip: BaseExampleAngularCore.Model.ITrip) {
        this.http.post(this.baseUrl + "api/trips/AddTrip", trip).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
            );
    }

    getAllTrip(): Observable<any> {
        return this.http.get(this.baseUrl + "api/trips/GetTrips").map((res: Response) => {

            return <BaseExampleAngularCore.Model.ITrip[]>res.json();
        });
    }

    upload(file: FormData) {
        return this.http.post(this.baseUrl + "api/trips/UploadFile", file).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
        );
    }

    listen(): Observable<any> {
        return this.listners.asObservable();
    }

    refresh(filterBy: string) {
        this.listners.next(filterBy);
    }

}

