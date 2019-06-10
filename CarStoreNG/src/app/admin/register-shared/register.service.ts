import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerData: Register;
  usersList : Register[];

  readonly rootUrl = "http://localhost:56589/api"

  constructor(private http : HttpClient) { }


  postUser(registerData:Register){
    return this.http.post(this.rootUrl+'/RegisterUsers',registerData);
  }

  getList(){
    this.http.get(this.rootUrl+'/RegisterUsers')
    .toPromise().then(res => this.usersList= res as Register[]);
  }

  getUserById(Id:number){
    return this.http.get(this.rootUrl+'/RegisterUsers/'+Id);
  }
  getOneUserById(Id:number){
    return this.http.get(this.rootUrl+'/RegisterUsers/'+Id);
  }

  upgradetUser(registerData:Register){
    return this.http.put(this.rootUrl+'/RegisterUsers/'+registerData.Id,registerData);
  }

  deleteRegister(id : number){
    return this.http.delete(this.rootUrl+'/RegisterUsers/'+id);

  }

  userAuthentication(UserName, Password){
    var data = "username="+UserName+"&password="+Password+"&grant_type=password";
    var requestHeader = new HttpHeaders({'Content-Type':'application/x.www-urlencoded'});
    return this.http.post('http://localhost:56589/token',data,{headers: requestHeader});
  }

  getUserClaims(){
   return this.http.get(this.rootUrl+'/RegisterUsers',{headers: new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('userToken')
    })});
  }

  
  public isUserLoggedIn() {
    return localStorage.getItem('userToken').length > 0;
  }
  public isUserSuper(){
    return localStorage.getItem('role')=="2";
  }

  public Worker(){
    return localStorage.getItem('role')=="2" || localStorage.getItem('role')=="3"
  }
  public isUserAdmin() {
    return localStorage.getItem('role') == "3";
  }

}