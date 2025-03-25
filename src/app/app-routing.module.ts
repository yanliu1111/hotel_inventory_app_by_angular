import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotfountComponent } from './notfount/notfount.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomsAddComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }