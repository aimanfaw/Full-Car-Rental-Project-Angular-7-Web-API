import { CarInfo } from './../carsShared/car-info.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../carsShared/cars.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-carsinfo',
  templateUrl: './add-carsinfo.component.html',
  styleUrls: ['./add-carsinfo.component.css']
})
export class AddCarsComponent implements OnInit {

  constructor(private carsService:CarsService, public router:Router, private http:HttpClient,
    private toastr : ToastrService)  { }
  

  ngOnInit() {
    this.carsInfoForm();

  }


  carsInfoForm(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.carsService.formInfoCar={
      CarId :null,
      Type :'',
      Model :'',
      YearMade :0,
      Gear :'',
      
    }
  }




//reload the page
  public reloadPage(){
    let  win = (window as any);
     if(win.location.search !== '?loaded' ) {
         win.location.search = '?loaded';
         win.location.reload()
     }
    }
  
    onSubmit(form : NgForm)
  {
    this.carsService.postInfo(form.value).subscribe(res=>{
      this.carsInfoForm(form);
      this.toastr.success('Car Added','Redirecting...');
    });
    this.router.navigate(['/uploadimage'])
}

}


