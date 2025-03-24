import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

// import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';

// import { HoverDirective } from '../hover.directive';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void { }

  login() {
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.route.navigate(['/rooms', 'add']);
    }
  }

}
