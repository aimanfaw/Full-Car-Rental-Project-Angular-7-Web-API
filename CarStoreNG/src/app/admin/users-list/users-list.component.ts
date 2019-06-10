import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/admin/register-shared/register.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/admin/register-shared/register.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private service: RegisterService, private toastr : ToastrService) { }

  ngOnInit() {

    this.service.getList();
    this.resetForm();
  }

  resetForm(form? : NgForm){
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
    if(form.value.Id == null)
    this.insertRecord(form);
  
    else
  this.updateUser(form);
  }

  insertRecord(form: NgForm){
    this.service.postUser(form.value).subscribe(res=>{
      this.toastr.success('Email Registerd','USER. Registerd');
      this.resetForm(form)
      this.service.getList()
    });
  }

  editUser(user : Register){
    this.service.registerData = Object.assign({},user);
  }

  updateUser(form : NgForm){
    this.service.upgradetUser(form.value).subscribe(res=>{
      this.toastr.success('User Updated','USER. Updated!');
      this.resetForm(form)
      this.service.getList();
    });
  }

  userDelete(id : number ){
    if(confirm("Are u sure you want to delete this user?")){
    this.service.deleteRegister(id).subscribe(res=>{
      this.service.getList();
      this.toastr.success('User Deleted','USER. Deleted!');
      });
    }

  }

  
}
