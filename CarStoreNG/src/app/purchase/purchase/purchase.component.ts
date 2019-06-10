import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/admin/paymentShared/payment.service';
import { RentedCarsServiceService } from 'src/app/admin/rented-cars/rentedCarsShared/rented-cars-service.service';
import { RentedCarsModel } from 'src/app/admin/rented-cars/rentedCarsShared/rented-cars-model.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GetCarComponent } from 'src/app/admin/get-rented-car/get-rented-car.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  userId = localStorage.getItem("Id");
  userPurchase:RentedCarsModel[];
  constructor(private paymentService:RentedCarsServiceService,private http:HttpClient,private dialog:MatDialog) { }

  ngOnInit() {
   this.getUserClaims();
  }

  getUserClaims(){
    this.http.get('http://localhost:56589/api/RentTables').toPromise()
    .then(res=>this.userPurchase = res as RentedCarsModel[]);
  }


  CheckCarId(CarTypeId){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = {CarTypeId}
   this.dialog.open(GetCarComponent, dialogConfig)
  }
}
