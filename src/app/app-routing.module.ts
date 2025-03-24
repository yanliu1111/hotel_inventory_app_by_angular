import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { NotfountComponent } from './notfount/notfount.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', component: NotfountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
