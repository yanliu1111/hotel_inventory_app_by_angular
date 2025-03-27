import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotfountComponent } from './notfount/notfount.component';
import { loginGuard } from './guards/login.guard';
import { roomGuard } from './rooms/guards/room.guard';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [loginGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule),
    canActivate: [loginGuard, roomGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canActivate: [loginGuard] 
  },
  { path: '**', component: NotfountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }