import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { ImageUploaderComponent } from './admin/image-uploader/image-uploader.component';
import { ContactComponent } from './admin/contact/contact.component';
import { PaymentComponent } from './payment/payment.component';

import { RentcarComponent } from './car/rentcar/rentcar.component';
import { AddCarsComponent } from './admin/add-carsinfo/add-carsinfo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { UsersListComponent } from './admin/users-list/users-list.component';

import { AddCarstypeComponent } from './admin/add-carstype/add-carstype.component';
import { CheckCarsComponent } from './admin/check-cars/check-cars.component';

import { AuthGuard } from './admin/AuthGuard/auth.guard';
import { RentedCarsComponent } from './admin/rented-cars/rented-cars.component';



const routes: Routes = 
[
  {path:'contact',component:ContactComponent},
  {path:'',component:HomeComponent,},
  {path:'payment', component:PaymentComponent},
  {path:'home',component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'users',component:UsersListComponent, canActivate:[AuthGuard] },
  {path:'login', component:LoginComponent},
  {path:'addinfocars',component:AddCarsComponent,canActivate:[AuthGuard]},
  {path:'addtypecars', component:AddCarstypeComponent,canActivate:[AuthGuard]},
  {path:'rentcars', component:RentcarComponent},
  {path:'editcars', component:CheckCarsComponent,canActivate:[AuthGuard],},
  {path:'uploadimage', component:ImageUploaderComponent,},
  {path: 'rentedcars',component:RentedCarsComponent},
  {path:'purchase',component:PurchaseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
