import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RegisterService } from '../register-shared/register.service';
import { Register } from '../register-shared/register.model';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data, public dialogRef:MatDialogRef<GetUserComponent>,
  private userService:RegisterService) { }

  oneUserList:Register[];
  ngOnInit( ) {
    this.userService.getOneUserById(this.data.UserId).toPromise().then(res => this.oneUserList = res as Register[]);
  }

}
