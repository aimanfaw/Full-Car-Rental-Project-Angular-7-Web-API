

import { Component, OnInit, ViewChild, AfterViewInit, Input, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { NgForm } from '@angular/forms';
import { PaymentService } from '../admin/paymentShared/payment.service';
import { CarType } from '../admin/carsShared/car-type.model';
import { CarsService } from '../admin/carsShared/cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  
})

export class PaymentComponent implements OnInit {
userId = localStorage.getItem("Id")
private setStartDate = new Date();
private setEndDate = new Date()
dayPrice = this.data.PriceForDay
lateDayPrice=this.data.LatePay
Total;
oneCarList:CarType[]
constructor(private paymentService : PaymentService ,
  @Inject(MAT_DIALOG_DATA) public data, public dialogRef:MatDialogRef<PaymentComponent>,private carsService:CarsService,
  private toastr:ToastrService )  { }
 
  ngOnInit() {
    this.paymentForm();
  }


  
  paymentForm( form? : NgForm){
    if(form!=null)
    form.resetForm();
    this.paymentService.payForm ={
      Id:null,
      StartDate:'',
      EndDate:'',
      UserId:this.userId,
      CarTypeId:this.data.CarId,
    }
  
  }
  
  onSubmit(form : NgForm,){
       this.insertRecord(form);
       this.toastr.success('Thanks!','Date were set');
       this.paymentForm();
  }
  

  insertRecord(form : NgForm){
    this.paymentService.postPayment(form.value).subscribe(res=>{
      this.paymentForm(form);
    })
  }


////DATE HANDLER SYSTEM ///
 StartDate;
 EndDate;
 CountDays
  selectStartDate(event : any){

    this.setStartDate = new Date()
    this.StartDate = new Date(event.target.value);
    this.setEndDate = new Date(this.StartDate)
  }

  selectEndDate(event : any){
    this.EndDate = new Date(event.target.value);
  }

  dateHandler(){
    let selectedDates = (this.EndDate - this.StartDate);
    this.CountDays = Math.floor(selectedDates / 86400000); 
  }
//////////////////////////////////////////////////////////


////PAYMENT TOTAL/////////////////
updateTotal(){
  this.Total=(this.CountDays * this.dayPrice).toFixed(2)
}
///////////////////////////////////
}
