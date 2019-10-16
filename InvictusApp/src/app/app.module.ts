// import { AllWriteOffStockComponent } from './stock/all-write-off-stock/all-write-off-stock.component';
// import { AddWriteOffStockComponent } from './stock/add-write-off-stock/add-write-off-stock.component';
// import { WriteoffphotoComponent } from './stock/writeoffphoto/writeoffphoto.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { WriteoffphotoPage } from 'src/app/pages/writeoffphoto/writeoffphoto.page';

@NgModule({
  declarations: [AppComponent,
    
    
    // AllWriteOffStockComponent,
    // AddWriteOffStockComponent,
    // WriteoffphotoComponent
  ],
  exports: [],
  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    HttpClientModule,
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule],
    
  providers: [
    StatusBar,
    HttpClientModule,
    FormsModule,
    SplashScreen,
    WebcamModule,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
