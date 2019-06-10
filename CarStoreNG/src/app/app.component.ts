import { Component } from '@angular/core';
import { RegisterService } from 'src/app/admin/register-shared/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeng';

  constructor(public auth: RegisterService, public router : Router) {
  
  }

  Logout() {
    localStorage.setItem('userToken', '');
    localStorage.setItem('role', '');
    localStorage.setItem('Id','')
    this.router.navigate(['/login']);
  }
  
  public reloadPage(){
    let  win = (window as any);
     if(win.location.search !== '?loaded' ) {
         win.location.search = '?loaded';
         win.location.reload()
     }
    }




}
