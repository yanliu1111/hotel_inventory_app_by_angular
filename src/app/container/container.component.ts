import { AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';

import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterViewInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  constructor() { }
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log(this.employee);
  }

}
