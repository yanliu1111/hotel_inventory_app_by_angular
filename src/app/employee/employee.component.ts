import { Component, OnInit, Self } from '@angular/core';

import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John Doe';
  constructor(@Self() private roomService: RoomsService) { }
  ngOnInit(): void { }

}
