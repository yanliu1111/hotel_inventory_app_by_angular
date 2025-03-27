import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
    });
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