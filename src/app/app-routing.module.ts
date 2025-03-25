import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotfountComponent } from './notfount/notfount.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }