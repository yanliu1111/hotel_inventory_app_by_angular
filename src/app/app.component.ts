import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-management';
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    console.log(this.name);
    this.name.nativeElement.innerText = 'California Hotel';
  }
}
