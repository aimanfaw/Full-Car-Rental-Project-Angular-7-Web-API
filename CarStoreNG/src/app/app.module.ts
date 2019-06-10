import { AgmCoreModule } from '@agm/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { CarInfo } from './admin/carsShared/car-info.model';
import { CarType } from './admin/carsShared/car-type.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RentcarComponent } from './car/rentcar/rentcar.component';

import { Register } from 'src/app/admin/register-shared/register.model';
import { AddCarsComponent } from './admin/add-carsinfo/add-carsinfo.component';
import { CarsService } from './admin/carsShared/cars.service';
import { AddCarstypeComponent } from './admin/add-carstype/add-carstype.component';
import { CheckCarsComponent } from './admin/check-cars/check-cars.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterService } from './admin/register-shared/register.service';
import { Payment } from './admin/paymentShared/payment.model';
import { PaymentService } from './admin/paymentShared/payment.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ContactComponent } from './admin/contact/contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RentedCarsComponent } from './admin/rented-cars/rented-cars.component';
import { GetUserComponent } from './admin/get-user/get-user.component';
import { GetCarComponent } from './admin/get-rented-car/get-rented-car.component';
import { ImageUploaderComponent } from './admin/image-uploader/image-uploader.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CarInfoComponent } from './admin/check-cars/car-info/car-info.component';
import { CarTypeComponent } from './admin/check-cars/car-type/car-type.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UsersListComponent,
    RentcarComponent,
    AddCarsComponent,
    AddCarstypeComponent,
    CheckCarsComponent,
    PaymentComponent,
    ContactComponent,
    RentedCarsComponent,
    GetUserComponent,
    GetCarComponent,
    ImageUploaderComponent,
    CarInfoComponent,
    CarTypeComponent,
    PurchaseComponent,
    


  
  ],
  imports: [
    Ng2SearchPipeModule,
    MatDialogModule,
    FilterPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:''
    }),
    NgxPaginationModule

   
  ],

  entryComponents:[PaymentComponent,GetUserComponent,GetCarComponent,RentcarComponent,
  CarInfoComponent,CarTypeComponent],
  providers: 
  [
  
  Payment,
  PaymentService,
  Register,
  RegisterService,
  CarsService,
  CarType,
  CarInfo,
  

]
  ,

  bootstrap: [AppComponent]
})
export class AppModule { }
