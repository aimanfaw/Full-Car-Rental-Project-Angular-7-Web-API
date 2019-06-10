import { GetCarComponent } from './../get-rented-car/get-rented-car.component';

import { CarsService } from 'src/app/admin/carsShared/cars.service';
import { Component, OnInit } from '@angular/core';
import { RentedCarsServiceService } from './rentedCarsShared/rented-cars-service.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../register-shared/register.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GetUserComponent } from '../get-user/get-user.component';

@Component({
  selector: 'app-rented-cars',
  templateUrl: './rented-cars.component.html',
  styleUrls: ['./rented-cars.component.css']
})
export class RentedCarsComponent implements OnInit {

  constructor(private serviceRented: RentedCarsServiceService,private toastr : ToastrService,private userService:RegisterService,
    private carService:CarsService,private dialog:MatDialog) { }

  ngOnInit() {
  this.serviceRented.getCars();
  }

  DeleteRent(Id){
    if(confirm("Are u sure you want to delete this Rent?")){
      this.serviceRented.deleteRent(Id).subscribe(res=>{
        this.serviceRented.getCars();
        this.toastr.success('Rent Deleted','Deleted!');
        });
      }
  }
  CheckUserId(UserId){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = {UserId}
   this.dialog.open(GetUserComponent, dialogConfig)
  }

  CheckCarId(CarTypeId){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = {CarTypeId}
   this.dialog.open(GetCarComponent, dialogConfig)
  }
}
