import { MatDialogConfig } from '@angular/material/dialog';

import { RegisterService } from 'src/app/admin/register-shared/register.service';
import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserId
  isLoginError:boolean = false
  constructor(private userService : RegisterService, private router : Router,private dialog:MatDialog,private toastr : ToastrService) { }
  ngOnInit() {
   
  }
 

  OnSubmit(UserName, Password){
    this.userService.userAuthentication(UserName,Password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('Id',data.Id)
      this.router.navigate(['/home'])
  
    },
    (err: HttpErrorResponse)=>{
      this.isLoginError = true;
      this.toastr.warning('invalid username/password', 'Login denied',);
    });
  }

 


}
