import { Component, Input, OnInit } from '@angular/core';

import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];
  constructor() { }
  ngOnInit(): void {
  }

}
