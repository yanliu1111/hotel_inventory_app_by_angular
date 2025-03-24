import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { Router } from '@angular/router';

// import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';

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
