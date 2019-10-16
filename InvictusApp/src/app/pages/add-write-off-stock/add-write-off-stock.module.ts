import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddWriteOffStockPage } from './add-write-off-stock.page';

import { MaterialModule } from 'src/app/material.module';
import {WebcamModule} from 'ngx-webcam';




import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddWriteOffStockPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    IonicModule,
    WebcamModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddWriteOffStockPage]
})
export class AddWriteOffStockPageModule {}
