import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { ConfigService } from './services/config.service';
import { InitService } from './init.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-management';
  @ViewChild('name', { static: true }) name!: ElementRef;
  constructor(private initService: InitService, private configService: ConfigService, private router: Router) {

    console.log("initService.config", initService.config);
  }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   console.log("event", event);
    // });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log("NavigationStart", event);
    });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log("NavigationEnd", event);
    });
    this.name.nativeElement.innerText = 'California Hotel';
  }
}
