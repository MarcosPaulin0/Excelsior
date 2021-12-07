import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ComicDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatSnackBarModule,

  ]
})
export class HomeModule { }
