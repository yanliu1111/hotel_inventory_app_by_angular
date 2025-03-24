import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component
  ({
    selector: 'app-rooms-add',
    templateUrl: './rooms-add.component.html',
    styleUrls: ['./rooms-add.component.scss']
  })
export class RoomsAddComponent implements OnInit {
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
    if (roomsForm.valid) {
      this.room.roomNumber = this.generateUUID(); // Generate a UUID for roomNumber
      this.roomsService.addRoom(this.room).subscribe(
        (data) => {
          this.successMessage = 'Room added successfully';
          console.log('Room added:', data);
        },
        (error) => {
          console.error('Error adding room:', error);
        }
      );
      console.log('Form data:', this.room);
    } else {
      console.error('Form is invalid');
    }
  }

  generateUUID(): string {
    return crypto.randomUUID(); // Use the native crypto API to generate a UUID
  }
  ngOnInit(): void { }
}
