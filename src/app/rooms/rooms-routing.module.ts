import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { roomGuard } from './guards/room.guard';

const routes: Routes = [
  {
    path: '', component: RoomsComponent,
    canActivateChild: [roomGuard],
    children: [{ path: 'add', component: RoomsAddComponent },
      // { path: ':id', component: RoomsBookingComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
