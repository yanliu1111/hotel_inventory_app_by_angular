import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit {
  id: string = '';
  // id$ = this.router.params.pipe(map(params => params['id']));
  id$ = this.router.paramMap.pipe(map(params => params.get('id')));
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // if you use snapshot, you will not get the updated value of the id, will have issue when child component is reloaded
    // this.id = this.router.snapshot.params['id'];
    // this.router.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    // this.router.params.subscribe(params => { params.get('id') });
  }

}
