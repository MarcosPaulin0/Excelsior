import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

import { MessaseShowComponent } from './messase-show/messase-show.component';
import { NgxMaskModule } from 'ngx-mask';




@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ComicDetailsComponent,
    MessaseShowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MatIconModule,
    NgxMaskModule. forChild(),

  ]
})
export class HomeModule { }
