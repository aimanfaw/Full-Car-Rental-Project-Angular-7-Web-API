
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payForm : Payment
  payFormList:Payment[]
readonly rootUrl = "http://localhost:56589/api";

  constructor(private http : HttpClient) { }

  
  postPayment(payForm : Payment){
  return this.http.post(this.rootUrl+'/RentTables',payForm)
  }



}
