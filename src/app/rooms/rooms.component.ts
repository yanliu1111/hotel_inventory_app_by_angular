import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

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
  // how observables work, we can create an observable stream that emits values and then subscribe to it to listen to those values.
  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomService: RoomsService, private http: HttpClient) { }
  // The ngOnInit() method is a lifecycle hook that Angular calls after creating a component.
  // It is a good place to put initialization logic.
  ngOnInit(): void {
    this.stream.subscribe((data) => console.log('data', data));
    this.roomService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    }, (error) => {
      console.error('Error:', error);
    });
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
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 4.5,
    }
    // this.roomList.push(room);
    this.roomService.addRoom(room).subscribe((room) => {
      this.roomList = [...this.roomList, room];
    }, (error) => {
      console.error('Error:', error);
    });
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 666,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 4.5,
    }
    this.roomService.editRoom(room).subscribe((room) => {
      this.roomList = this.roomList.map((r) => r.roomNumber === room.roomNumber ? room : r);
    }, (error) => {
      console.error('Error:', error);
    });
  }
  deleteRoom() {
    this.roomService.deleteRoom('3').subscribe((room) => {
      this.roomList = this.roomList.filter((r) => r.roomNumber !== '3');
    }, (error) => {
      console.error('Error:', error);
    });
  }
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,

    });
    return this.http.request(request);
  }
}
