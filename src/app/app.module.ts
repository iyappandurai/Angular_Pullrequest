import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents:[

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
   MatSidenavModule,
    MatSnackBarModule,
   FormsModule,
   HttpClientModule,
   ReactiveFormsModule,
   MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
