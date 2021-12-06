
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
