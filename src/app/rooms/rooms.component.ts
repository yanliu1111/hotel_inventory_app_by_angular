import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = 'Hotel California';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom: RoomList | undefined;

  rooms: Room = {
    totalRooms: 10,
    roomsAvailable: 5,
    bookedRooms: 3,
  }
  title: string = 'Rooms List';
  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() { }
  // The ngOnInit() method is a lifecycle hook that Angular calls after creating a component.
  // It is a good place to put initialization logic.
  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('16-Nov-2021'),
      checkoutTime: new Date('30-Nov-2021'),
      rating: 4.1
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('29-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 2.6789
    }]
  }

  // ngDoCheck() {
  //   console.log('DoCheck Lifecycle Hook');
  // }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.forEach((headerComponent) => { });
  }
  ngAfterViewChecked(): void {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = this.hideRooms ? 'Show Rooms' : 'Hide Rooms';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log('Selected Room:', room);
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 4.5,
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
