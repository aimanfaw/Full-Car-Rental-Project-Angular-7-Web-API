import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarType } from './car-type.model';
import { CarInfo } from './car-info.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
formTypeCar:CarType;
formInfoCar:CarInfo;
listInfoCar:CarInfo[];
listTypeCar:CarType[];
readonly rootUrl = "http://localhost:56589/api";
  constructor(private http: HttpClient) { }

  getOneCarInfoById(CarId:number){
    return this.http.get('http://localhost:56589/api/CarInfoes/'+CarId)
  }
  getOneCarById(CarId:number){
    return this.http.get('http://localhost:56589/api/CarTypes/'+CarId)
  }

  ////POST IMAGE ///

  getPayCarId(CarId?:number){
    return this.http.get('http://localhost:56589/api/CarInfoes/'+CarId)
  }
  ////CAR TYPE DATA /////


  postType(formTypeCar:CarType){
    return this.http.post(this.rootUrl+'/CarTypes',formTypeCar);
    
  }

  getTypeCars(){
   return this.http.get(this.rootUrl+'/CarTypes')
  }
  getTypeCarData(){
    this.http.get(this.rootUrl+'/CarTypes')
    .toPromise().then(res=>this.listTypeCar = res as CarType[]);
  }

  upgradeType(formTypeCar:CarType){
    return this.http.put(this.rootUrl+'/CarTypes/'+formTypeCar.CarId,formTypeCar);
  }
  
  deleteType(id : number){
    return this.http.delete(this.rootUrl+'/CarTypes/'+id);
  
  }
  
  
getCarTypeId(CarId:number){
  return this.http.get(this.rootUrl+'/CarTypes/'+CarId)
 }


  //CAR INFO DATA \!/
  getInfoCars(){
    return this.http.get(this.rootUrl+'/CarInfoes')
   }

  postInfo(formInfoCar:CarInfo){
    return this.http.post(this.rootUrl+'/CarInfoes',formInfoCar);
  }

 
  getInfoCarData(){
  return  this.http.get(this.rootUrl+'/CarInfoes')
    .toPromise().then(res=>this.listInfoCar = res as CarInfo[]);

  }


getCarId(CarId:number){
 return this.http.get(this.rootUrl+'/CarInfoes/'+CarId)
}

upgradetInfo(formInfoCar:CarInfo){
  return this.http.put(this.rootUrl+'/CarInfoes/'+formInfoCar.CarId,formInfoCar);
}

deleteInfo(id : number){
  return this.http.delete(this.rootUrl+'/CarInfoes/'+id);

}

}
 

