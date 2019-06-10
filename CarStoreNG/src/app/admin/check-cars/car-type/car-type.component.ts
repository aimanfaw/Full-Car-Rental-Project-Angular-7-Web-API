import { CarType } from './../../carsShared/car-type.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CarsService } from '../../carsShared/cars.service';


@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.css']
})
export class CarTypeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef:MatDialogRef<CarTypeComponent>, private carService:CarsService,
  private toastr:ToastrService,private http: HttpClient) { }
  myCar:CarType[];
 readonly myCarId = this.data.CarId
  readonly rootUrl = "http://localhost:56589/api"
  ngOnInit() {
    return this.http.get(this.rootUrl+'/CarTypes/'+this.myCarId).toPromise().then(res=>this.myCar = res as CarType[])
  }


  onSubmit(form : NgForm){
    if(form.value.CarId == null)
    this.InsertCarType(form);
     
  
  
    else
  this.UpdateCarType(form);
  
  }


  InsertCarType(form: NgForm){
    this.carService.postType(form.value).subscribe(res=>{
      this.toastr.success('CAR Registerd','USER. Registerd');
      this.carService.getInfoCarData()
    });
  }





  UpdateCarType(form : NgForm){
    this.carService.upgradeType(form.value).subscribe(res=>{
      this.toastr.success('CarInfo ADDED','CARINFO. Updated!');
      this.carService.getTypeCarData();
    });
  }


}
