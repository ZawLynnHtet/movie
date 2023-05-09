import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exhaustAll } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userdata: any[] = [];

  email: string = '';
  password: string = '';

  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  signUp() {
    if (this.email === '') {
      alert("Enter your email");
      this.router.navigateByUrl('home');
    }
    else if (this.email.length < 10) {
      alert("Email is incorrect. Please enter the email like this:'name1234@gmail.com'")
      this.router.navigateByUrl('home');
    }
    this.email = '';
  }
}
