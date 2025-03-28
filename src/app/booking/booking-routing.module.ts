import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './booking.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: BookingComponent, canDeactivate: ['bookingGuard'] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
