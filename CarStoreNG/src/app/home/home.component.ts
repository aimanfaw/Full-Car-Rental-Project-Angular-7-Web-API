import { CarsImage } from './../admin/ImagesShared/cars-image.model';
import { CarsImageService } from './../admin/ImagesShared/cars-image.service';
import { HttpClient } from '@angular/common/http';
import { CarType } from './../admin/carsShared/car-type.model';
import { CarInfo } from './../admin/carsShared/car-info.model';
import { Router } from '@angular/router';
import { CarsService } from './../admin/carsShared/cars.service';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { RegisterService } from 'src/app/admin/register-shared/register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
imageKia:string="/assets/CarsImages/KiaPicanto.jpg"
imageFord:string="/assets/CarsImages/FordFusion.jpg"
imagePeuogeot:string="/assets/CarsImages/Peuogeot207.jpg"
imageRenault:string="/assets/CarsImages/RenaultClio.jpg"
imageToyota:string="/assets/CarsImages/ToyotaCHR.jpg"

  readonly rootUrl = "http://localhost:56589/api";
infoCarList:CarInfo[];
typeCarList:CarType[];
imgCarList:CarsImage[]
myImagePath:string=""
lat:number=32.895694;
lon:number=35.413033;
CarStoreIcon:string="/assets/Icon/CarStoreIcon.png"

  constructor( private imgService:CarsImageService,private carService:CarsService, private userService: RegisterService, private router : Router, private http:HttpClient) { }

  ngOnInit() {
    this.getCarInfo()
    this.getCarType();
    this.getImgs();
    
  }


  
getCarInfo(){
  this.http.get(this.rootUrl+'/CarTypes')
  .toPromise().then(res=>this.typeCarList = res as CarType[]);
}

getCarType(){
  this.http.get(this.rootUrl+'/CarInfoes')
  .toPromise().then(res=>this.infoCarList = res as CarInfo[]);
}

getImgs(){
this.http.get(this.rootUrl+'/CarsImagesData')
.toPromise().then(res=>this.imgCarList = res as CarsImage[]);
}



}