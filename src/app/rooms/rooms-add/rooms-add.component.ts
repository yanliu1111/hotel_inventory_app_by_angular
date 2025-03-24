import { FormsModule, NgForm } from '@angular/forms';

import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component
  ({
    selector: 'app-rooms-add',
    templateUrl: './rooms-add.component.html',
    styleUrls: ['./rooms-add.component.scss']
  })
export class RoomsAddComponent {
  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  successMessage: string = '';

  constructor(private roomsService: RoomsService) { }

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully';
      roomsForm.resetForm({
        roomNumber: '',
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0,
      });
    });
  }
}
