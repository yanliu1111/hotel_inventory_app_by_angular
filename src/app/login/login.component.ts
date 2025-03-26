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

  // login() {
  //   if (this.email === "admin@gmail.com" && this.password === "admin") {
  //     this.route.navigate(['/rooms', 'add']);
  //   }
  // }
  login() {
    if (this.email === "regular@gmail.com" && this.password === "regular") {
      localStorage.setItem('userToken', 'your-token-here');
      localStorage.setItem('userRole', 'regular'); // Store the user's role as regular
      this.route.navigate(['/rooms']);
    } else if (this.email === "admin@gmail.com" && this.password === "admin") {
      localStorage.setItem('userToken', 'your-token-here');
      localStorage.setItem('userRole', 'admin'); // Store the user's role as admin
      this.route.navigate(['/rooms']);
    } else {
      alert('Invalid credentials');
    }
  }

}
