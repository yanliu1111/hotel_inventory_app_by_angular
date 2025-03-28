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
      roomId: new FormControl({ value: '2', disabled: true }, { validators: [Validators.required] }),
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', { updateOn: 'blur' }],
      guestName: ['', [Validators.required, Validators.minLength(5)]], // Added minlength validator
      address: this.fb.group({
        addressLine1: ['', Validators.required], // Fixed typo: AddresLine1 -> addressLine1
        addressLine2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.addGuestControl()
      ]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
    });
    this.getBookingData();
    this.bookingForm.valueChanges.subscribe((data) => {
      // console.log("data", data);
    });
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()
    // ).subscribe((data)=> {console.log(data)});
    // purpose for reset form after submit
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
  getBookingData() {
    this.bookingForm.patchValue({
      // roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('27-March-2025'),
      // checkoutDate: '',
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
    })
  }
  addGuest() {
    this.guests.push(
      this.addGuestControl()
    )
  }
  addGuestControl() {
    return this.fb.group({
      guestName: ['', Validators.required],
      age: new FormControl('', { validators: [Validators.required] }),
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
