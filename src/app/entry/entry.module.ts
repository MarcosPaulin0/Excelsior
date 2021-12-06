import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EntryRoutingModule } from './entry-routing.module';
import { BackgroundComponent } from './background/background.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { AdressComponent } from './adress/adress.component';
import { AccountComponent } from './account/account.component';
import { MessageComponent } from './message/message.component';
import { CepService } from './adress/cepService/cep.service';



@NgModule({
  declarations: [
    BackgroundComponent,
    LoginComponent,
    AccountComponent,
    PaymentComponent,
    AdressComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule . forRoot ( ) ,
    HttpClientModule,


  ],
  exports:[
    MessageComponent,
    LoginComponent,
  ],
  providers:[
    CepService
  ]
})
export class EntryModule { }
