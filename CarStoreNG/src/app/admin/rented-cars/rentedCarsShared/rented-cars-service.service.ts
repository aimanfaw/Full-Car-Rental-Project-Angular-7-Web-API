import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentedCarsModel } from './rented-cars-model.model';

@Injectable({
  providedIn: 'root'
})
export class RentedCarsServiceService {
  readonly rootUrl = "http://localhost:56589/api"
  rentedCarsForm:RentedCarsModel
  rentedCarsList:RentedCarsModel[];

  constructor(private http:HttpClient) { }

  getCarById(id:any){
    return this.http.get(this.rootUrl+'/RentTables/'+id)
  }
  getCars(){
    return this.http.get(this.rootUrl+'/RentTables')
    .toPromise().then(res => this.rentedCarsList= res as RentedCarsModel[]);
  }

  deleteRent(id : number){
    return this.http.delete(this.rootUrl+'/RentTables/'+id);

  }
}
