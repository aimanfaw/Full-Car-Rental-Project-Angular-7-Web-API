import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/admin/register-shared/register.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Register } from 'src/app/admin/register-shared/register.model';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService, private toastr : ToastrService,private http:HttpClient) { }

  ngOnInit() {
this.checkUserName();
    this.resetForm();
  }

  resetForm( form ? : NgForm){
    if(form!=null)
    form.resetForm();
    this.service.registerData={
        Id:null,
        FullName:'',
        UserName:'',
        Password:'',
        Email:'',
        PersonId:null,
        Gender:'',
        RoleId:null,
    }
  }


  onSubmit(form : NgForm){
    this.insertRecord(form);
  }
myUserName:Register[]
checkUserName(){
return this.http.get('http://localhost:56589/api/registerusers').toPromise()
.then(res=>this.myUserName = res as Register[]);
}

  insertRecord(form: NgForm){
    this.service.postUser(form.value).subscribe(res=>{
      this.toastr.success('Email Registerd','USER. Registerd');
      this.resetForm(form)
    });
   
  }



}
