import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [{
    roomNumber: '1',
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
    roomNumber: '2',
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
    roomNumber: '3',
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 15000,
    photos:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    checkinTime: new Date('29-Nov-2021'),
    checkoutTime: new Date('12-Dec-2021'),
    rating: 2.6789
  }]
  constructor(private http: HttpClient) {
    console.log('Rooms Service is Initialized ...');
  }

  getRooms(): Observable<RoomList[]> {
    return of(this.roomList);
  }
  addRoom(room: RoomList): Observable<RoomList> {
    this.roomList = [...this.roomList, room];
    return of(room);
  }
  editRoom(room: RoomList): Observable<RoomList> {
    this.roomList = this.roomList.map((r) => r.roomNumber === room.roomNumber ? room : r);
    return of(room);
  }
  deleteRoom(id: string) {
    this.roomList = this.roomList.filter((r) => r.roomNumber !== id);
    console.log("ididid", id);
    return of(this.roomList);
  }
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true
    });
    return this.http.request(request);
  }
}
