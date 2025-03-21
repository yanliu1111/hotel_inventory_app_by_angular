import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-management';
  @ViewChild('name', { static: true }) name!: ElementRef;
  constructor(private initService: InitService) {
    console.log(initService.config);
  }

  ngOnInit() {
    this.name.nativeElement.innerText = 'California Hotel';
  }
}
