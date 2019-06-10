import { CarInfo } from './../../admin/carsShared/car-info.model';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild,} from '@angular/core';
import { CarsService } from 'src/app/admin/carsShared/cars.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/admin/paymentShared/payment.service';

import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PaymentComponent } from 'src/app/payment/payment.component';
import { RegisterService } from 'src/app/admin/register-shared/register.service';
import { CarsImageService } from 'src/app/admin/ImagesShared/cars-image.service';



@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css']
})
export class RentcarComponent implements OnInit {

imageKia:string="/assets/CarsImages/KiaPicanto.jpg"
imageFord:string="/assets/CarsImages/FordFusion.jpg"
imagePeuogeot:string="/assets/CarsImages/Peuogeot207.jpg"
imageRenault:string="/assets/CarsImages/RenaultClio.jpg"
imageToyota:string="/assets/CarsImages/ToyotaCHR.jpg"
searchModel;
searchYear;
searchGear;
 
  constructor(private paymentService:PaymentService, private service : CarsService, 
    private router:Router, private toastr : ToastrService,private http: HttpClient,
    private dialog:MatDialog, private userService:RegisterService,
    private pictureService:CarsImageService) 
  {

  }


  ngOnInit() {

  this.pictureService.getImageCarData()
 
    this.service.getInfoCarData()

    this.service.getTypeCarData()
    this.getDataNow();
  }






 TypeFilter(type,gear){
   this.searchModel=0;
   this.searchYear=0
   this.searchGear=0
    this.carTypes = this.data
    this.newCarType=[...this.carTypes.filter(e => e.Type.toString().includes(type))];
   

   }





  newCarType:any
  data: any;
  carTypes: any;

  getData() {

    return this.data = this.http.get('http://localhost:56589/api/CarInfoes')
    
  }

  getDataNow() {
    this.carTypes = [];
    this.getData().subscribe(
      data => {this.data = data; },
      err => { console.log(err); },
      () => { 
        this.carTypes = this.data;
        this.newCarType = [...this.data] 
      }
    );
  }



  myCarId(CarId,LatePay,PriceForDay){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = {CarId,LatePay,PriceForDay}
   this.dialog.open(PaymentComponent, dialogConfig)

    
    }

    
  
    

}
