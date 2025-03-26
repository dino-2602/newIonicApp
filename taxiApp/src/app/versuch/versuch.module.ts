import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersuchPageRoutingModule } from './versuch-routing.module';

import { VersuchPage } from './versuch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersuchPageRoutingModule
  ],
  declarations: [VersuchPage]
})
export class VersuchPageModule {}
