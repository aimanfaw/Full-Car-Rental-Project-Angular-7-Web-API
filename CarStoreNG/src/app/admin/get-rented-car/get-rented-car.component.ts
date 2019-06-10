import { CarInfo } from './../carsShared/car-info.model';
import { CarsService } from './../carsShared/cars.service';
import { CarType } from './../carsShared/car-type.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-rented-car.component.html',
  styleUrls: ['./get-rented-car.css']
})
export class GetCarComponent implements OnInit {
oneCarList:CarType[]
StartDate;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef:MatDialogRef<GetCarComponent>, private carService:CarsService) { }

  ngOnInit() {
    this.carService.getOneCarById(this.data.CarTypeId).toPromise().then(res => this.oneCarList = res as CarType[]);
  }

}
