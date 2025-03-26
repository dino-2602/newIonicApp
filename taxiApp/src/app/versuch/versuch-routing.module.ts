import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersuchPage } from './versuch.page';

const routes: Routes = [
  {
    path: '',
    component: VersuchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersuchPageRoutingModule {}
