import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John Doe';
  constructor() { }
  ngOnInit(): void { }

}
