import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TripService } from '../../services/trip.service';

@Component({
    selector: 'addtrips',
    templateUrl: './addtrips.component.html',
    styleUrls: ['./addtrips.component.css']
})
export class AddTripsComponent {

    signupForm: any;

    tripService: TripService

    fb: FormBuilder;

   @Output() onRefresh: EventEmitter<any> = new EventEmitter();

    url: any;
    selectedFile: any;
    assets: string[] = [];
    trip: BaseExampleAngularCore.Model.ITrip;

    constructor(tripService: TripService,fb: FormBuilder){
        this.url = "http://cudne-m.pl/wp-content/uploads/2017/03/natural-white-300x200.jpg";

        this.fb = fb;
        this.tripService = tripService;



        this.selectedFile = null;

            this.signupForm = new FormGroup({
                HotelName: new FormControl('', [
                    <any>Validators.required,
                    <any>Validators.minLength(4)
                ]),
                Country: new FormControl('', [
                    <any>Validators.required,
                    <any>Validators.minLength(3)
                ]),
                Region: new FormControl('', [
                    <any>Validators.required,
                    <any>Validators.minLength(4)
                ]),
                Price: new FormControl('', [
                    <any>Validators.required,
                    <any>Validators.minLength(4)
                ]),
                HowLong: new FormControl('', [
                    <any>Validators.required
                ]),
                TripDate: new FormControl(),
                Assets: this.fb.array([
                    this.initAssets()
                ])
            })
    }



    removeAssets(i: number) {
        const control = <FormArray>this.signupForm.controls['Assets'];
        control.removeAt(i);
    }

    addAssets() {
        const control = <FormArray>this.signupForm.controls['Assets'];
        control.push(this.initAssets());
    }

    initAssets() {
        return this.fb.group({
            Asset: ['']
        });
    }

        uploadFile() {
        const formData: FormData = new FormData();

        formData.append('image', this.selectedFile, this.selectedFile.name);

        this.tripService.upload(formData);
    }

    public onClickSubmit() {
        if (this.signupForm.valid) {
            var values = this.signupForm.value;

            for (let key in values.Assets) {
                this.assets.push(values.Assets[key].Asset);
            }


            this.trip = values;

            this.trip.Assets = this.assets;

            this.trip.Date = "11-16-2018";


            this.trip.ImagePath = "../../../../Upload/" + this.selectedFile.name;

            this.uploadFile();


            this.tripService.AddTrip(this.trip);

            this.tripService.refresh("refreshTrips");

        }
    }
}

//import { Component } from '@angular/core';
//////import { TripService } from '../../services/trip.service';
////import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
////import { forEach } from '@angular/router/src/utils/collection';
////import { Router } from '@angular/router';

//////import { TripComponent } from '../trip/trip.component';
////import { Event } from '@angular/router/src/events';


//@Component({
//    selector: 'addtrips',
//    templateUrl: './addtrips.component.html',
//    styleUrls: ['./addtrips.component.css']
//})
//export class AddTripsComponent {

//    //trip: BaseExampleAngularCore.Model.ITrip;

//    //signupForm: FormGroup;

//    url: any;

//    imagePath: any;

//    selectedFile: any;

//    //@Output() onRefresh: EventEmitter<any> = new EventEmitter();

//    assets: string[] = [];

//    constructor(/*private tripService: TripService*/
//        //private router: Router,
//        //private fb: FormBuilder
//    ) {


//        this.url = "http://cudne-m.pl/wp-content/uploads/2017/03/natural-white-300x200.jpg";

//        this.selectedFile = null;

//        //this.signupForm = new FormGroup({
//        //    HotelName: new FormControl('', [
//        //        <any>Validators.required,
//        //        <any>Validators.minLength(4)
//        //    ]),
//        //    Country: new FormControl('', [
//        //        <any>Validators.required,
//        //        <any>Validators.minLength(3)
//        //    ]),
//        //    Region: new FormControl('', [
//        //        <any>Validators.required,
//        //        <any>Validators.minLength(4)
//        //    ]),
//        //    Price: new FormControl('', [
//        //        <any>Validators.required,
//        //        <any>Validators.minLength(4)
//        //    ]),
//        //    HowLong: new FormControl('', [
//        //        <any>Validators.required
//        //    ]),
//        //    TripDate: new FormControl(),
//        //    Assets: this.fb.array([
//        //        this.initAssets()
//        //    ])
//        //})
//    }

//    removeAssets(i: number) {
//        // add address to the list
//        //const control = <FormArray>this.signupForm.controls['Assets'];
//        //control.removeAt(i);
//    }

//    addAssets() {
//        // add address to the list
//        //const control = <FormArray>this.signupForm.controls['Assets'];
//        //control.push(this.initAssets());
//    }

//    initAssets() {
//        //return this.fb.group({
//        //    Asset: ['']
//        //});
//    }

//    onFileSelected(event:any) {
//        //this.selectedFile = event.target.files[0];

//        //var reader = new FileReader();

//        //reader.onload = (event) => { // called once readAsDataURL is completed
//        //    const img = new Image();
            
//        //    if (reader.result) {
//        //        img.src = reader.result;
//        //    }
//        //    img.onload = (event2) => {
//        //        const canvas = document.createElement('canvas');
//        //        const ctx = canvas.getContext('2d');
//        //        //canvas.width = 150;
//        //        //canvas.height = 150;
//        //        if (ctx) {
//        //            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//        //        }

//        //        this.url = canvas.toDataURL('image/jpg');
//        //    };
//        //}

//        //reader.readAsDataURL(event.target.files[0]); // read file as data url
//    }

//    uploadFile() {
//        //const formData: FormData = new FormData();

//        //formData.append('image', this.selectedFile, this.selectedFile.name);

//        //this.tripService.upload(formData);
//    }

//    public onClickSubmit() {
//        //if (this.signupForm.valid) {
//        //    var values = this.signupForm.value;

//        //    for (let key in values.Assets) {
//        //        this.assets.push(values.Assets[key].Asset);
//        //    }


//        //    this.trip = values;

//        //    this.trip.Assets = this.assets;

//        //    this.trip.Date = "11-16-2018";


//        //    this.trip.ImagePath = "../../../../Upload/" + this.selectedFile.name;

//        //    this.uploadFile();


//            //this.tripService.AddTrip(this.trip);

//            //this.tripService.refresh("refreshTrips");

//        //}
//    }

//}