import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdressComponent } from './adress/adress.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

const entryRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'adress', component: AdressComponent},
];

@NgModule({
  imports: [RouterModule.forChild(entryRoutes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
