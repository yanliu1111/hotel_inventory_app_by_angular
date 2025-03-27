import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
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
      guestCount: [''],
    });
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }
}
// roomId: string,
// guestEmail: string,
// checkinDate: Date,
// checkoutDate: Date,
// bookingStatus: string,
// bookingAmount: number,
// bookingDate: Date,
// mobileNumber: string,
// guestName: string,
// guestAddress: string,
// guestCity: string,
// guestState: string,
// guestCountry: string,
// guestList: Guest[]