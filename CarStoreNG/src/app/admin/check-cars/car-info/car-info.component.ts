import { HttpClient } from '@angular/common/http';
import { RentedCarsModel } from './../../rented-cars/rentedCarsShared/rented-cars-model.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarInfo } from './../../carsShared/car-info.model';
import { CarType } from './../../carsShared/car-type.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GetCarComponent } from '../../get-rented-car/get-rented-car.component';
import { CarsService } from '../../carsShared/cars.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef:MatDialogRef<CarInfoComponent>, private carService:CarsService,
  private toastr:ToastrService,private http: HttpClient) { }
  myCar:CarInfo[];
 readonly myCarId = this.data.CarId
  readonly rootUrl = "http://localhost:56589/api"
  ngOnInit() {
    return this.http.get(this.rootUrl+'/CarInfoes/'+this.myCarId).toPromise().then(res=>this.myCar = res as CarInfo[])
  }


  onSubmit(form : NgForm){
    if(form.value.CarId == null)
    this.InsertCarInfo(form);
     
  
  
    else
  this.UpdateCarInfo(form);
  
  }


  InsertCarInfo(form: NgForm){
    this.carService.postInfo(form.value).subscribe(res=>{
      this.toastr.success('CAR Registerd','USER. Registerd');
      this.carService.getInfoCarData()
    });
  }





  UpdateCarInfo(form : NgForm){
    this.carService.upgradetInfo(form.value).subscribe(res=>{
      this.toastr.success('CarInfo ADDED','CARINFO. Updated!');
      this.carService.getInfoCarData();
    });
  }




}
