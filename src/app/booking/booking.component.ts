import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private configService: ConfigService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''], // Fixed typo: AddresLine1 -> addressLine1
        addressLine2: [''], // Fixed typo: AddresLine2 -> addressLine2
        city: [''], // Fixed typo: City -> city
        state: [''], // Fixed typo: State -> state
        country: [''], // Fixed typo: Country -> country
        zipCode: [''],
      }),
      guests: this.fb.array([this.fb.group({
        guestName: [''],
        age: new FormControl(''),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      })]),
    });
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()
    // ).subscribe((data)=> {console.log(data)});

    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      Address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }
  // addBooking() {
  //   console.log(this.bookingForm.getRawValue());
  // }
  addGuest() {
    this.guests.push(
      this.addGuestControl()
    )
  }
  addGuestControl() {
    return this.fb.group({
      guestName: [''],
      age: new FormControl(''),
    });
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }
  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
