import { CarInfoComponent } from './car-info/car-info.component';
import { CarsImageService } from './../ImagesShared/cars-image.service';
import { CarType } from './../carsShared/car-type.model';
import { CarInfo } from './../carsShared/car-info.model';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from './../carsShared/cars.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CarTypeComponent } from './car-type/car-type.component';

@Component({
  selector: 'app-check-cars',
  templateUrl: './check-cars.component.html',
  styleUrls: ['./check-cars.component.css']
})
export class CheckCarsComponent implements OnInit {

  searchCarInfo
  searchCarType
  searchImage
  constructor(private service: CarsService, private imageService:CarsImageService, private toastr : ToastrService,
    private dialog:MatDialog) { }

  ngOnInit() {

    this.imageService.getImageCarData();
    this.service.getTypeCarData();
    this.service.getInfoCarData();
  }

  public reloadPage(){
    let  win = (window as any);
     if(win.location.search !== '?loaded' ) {
         win.location.search = '?loaded';
       return  win.location.reload()
     }
    }


  CarInfoDelete(CarId : number ){
    if(confirm("Are u sure you want to delete this CAR?")){
    this.service.deleteInfo(CarId).subscribe(res=>{
      this.service.getInfoCarData();
      this.toastr.success('CARINFO Deleted','Car Deleted!');
      });
      /*setInterval(this.reloadPage(),2000)*/
    }
  }
///CAR TYPE FUNCTIONS \!\








CarTypeDelete(CarId : number ){
  if(confirm("Are u sure you want to delete this CAR?")){
    this.service.deleteType(CarId).subscribe(res=>{
      this.service.getTypeCarData();
      this.toastr.success('CarType Deleted','Car Deleted!');
      });
      /*setInterval(this.reloadPage(),2000)*/
    }
  }




///IMAGE FUNCTIONS\\\
DeleteImage(CarId:number){
  if(confirm("Are u sure you want to delete this IMAGE?")){
    this.imageService.deleteImage(CarId).subscribe(res=>{
      this.imageService.getImageCarData();
      this.toastr.success('Image Deleted','Image DELETED');
      });
      /*setInterval(this.reloadPage(),2000)*/
    }
}



//////////////////////// EDIT CAR INFO ///////////////////////////////////
EditCarInfo(CarId,Type,Model,YearMade,Gear){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.data = {CarId,Type,Model,YearMade,Gear}
 this.dialog.open(CarInfoComponent, dialogConfig)
}

////////////////////// EDIT CAR INFO ///////////////////////////////
EditCarType(CarId,Available,PriceForDay,LatePay,CarNum,Location,CarInfoId){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.data = {CarId,Available,PriceForDay,LatePay,CarNum,Location,CarInfoId}
 this.dialog.open(CarTypeComponent, dialogConfig)
}

}


  



