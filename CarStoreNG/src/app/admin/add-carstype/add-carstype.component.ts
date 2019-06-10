import { HttpClient } from '@angular/common/http';
import { CarsService } from './../carsShared/cars.service';
import { AddCarsComponent } from './../add-carsinfo/add-carsinfo.component';

import { CarInfo } from './../carsShared/car-info.model';
import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-carstype',
  templateUrl: './add-carstype.component.html',
  styleUrls: ['./add-carstype.component.css']
})
export class AddCarstypeComponent implements OnInit {
 
 
  constructor(private carsService:CarsService, public router : Router,private http:HttpClient,
    private toastr : ToastrService ) { 
  
  }

  
  //reload the page
public reloadPage(){
 let  win = (window as any);
  if(win.location.search !== '?loaded' ) {
      win.location.search = '?loaded';
      win.location.reload()
  }
}
  ngOnInit() {

    this.carsTypeForm();
    this.carsService.getInfoCarData();
    
  }

  carsTypeForm(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.carsService.formTypeCar={
      CarId :null,
      Available :'',
      PriceForDay :0,
      LatePay :0,
      CarNum:'',
      Location:0,
      CarInfoId:0,
    }
  }





onSubmit(form : NgForm,Picture){
  this.carsService.postType(form.value).subscribe(res=>{
    this.carsTypeForm(form);
  });
  this.router.navigate(['/editcars'])
  this.toastr.success('Car Added','Redirecting...');
  this.reloadPage();
 
}

}
