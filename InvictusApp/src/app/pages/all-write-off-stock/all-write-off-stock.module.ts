import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllWriteOffStockPage } from './all-write-off-stock.page';
import { MaterialModule } from 'src/app/material.module';
// import { HttpClientModule  } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: AllWriteOffStockPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    // HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllWriteOffStockPage]
})
export class AllWriteOffStockPageModule {}
