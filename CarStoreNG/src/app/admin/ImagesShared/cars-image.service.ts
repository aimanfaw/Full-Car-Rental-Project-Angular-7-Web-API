import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarsImage } from './cars-image.model';

@Injectable({
  providedIn: 'root'
})
export class CarsImageService {
  formPictureCar:CarsImage;
  listPictureCar:CarsImage[]
  readonly rootUrl = "http://localhost:56589/api";
  constructor(private http:HttpClient,) { }

  PostImage(model:string  ,uploadFile:File){
    const endPoint = 'http://localhost:56589/api/Uploading';
    const formData : FormData = new FormData();
    formData.append('ImageName',uploadFile,uploadFile.name);
    formData.append('CarModel',model);
    return this.http.post(endPoint,formData);
  }


  getTypeImages(){
   return this.http.get(this.rootUrl+'/CarsImagesData')
  }
  getImageCarData(){
    this.http.get(this.rootUrl+'/CarsImagesData')
    .toPromise().then(res=>this.listPictureCar = res as CarsImage[]);
  }

  upgradeImage(formPictureCar:CarsImage){
    return this.http.put(this.rootUrl+'/CarsImagesData/'+formPictureCar.CarId,formPictureCar);
  }
  
  deleteImage(id : number){
    return this.http.delete(this.rootUrl+'/CarsImagesData/'+id);
  
  }
  
  
getCarImageId(CarId:number){
  return this.http.get(this.rootUrl+'/CarsImagesData/'+CarId)
 }

}
