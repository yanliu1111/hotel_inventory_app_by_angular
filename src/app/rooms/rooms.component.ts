import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
hotelName = 'Hotel California';
numberOfRooms = 10;
hideRooms = false;
  constructor() { }
// The ngOnInit() method is a lifecycle hook that Angular calls after creating a component.
// It is a good place to put initialization logic.
  ngOnInit(): void {
  }
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
