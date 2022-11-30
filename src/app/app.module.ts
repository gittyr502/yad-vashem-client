import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import{MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule}from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [AppComponent, LeftSideComponent, RightSideComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
