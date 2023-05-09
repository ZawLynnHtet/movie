import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email:string = '';
  password:string ='';
  visible:boolean = true;
  type:boolean = true;

  constructor(private roter:Router) {
  }

  ngOnInit(): void {
    
  }
  signIn() {
    if(this.email === "zaw1234@gmail.com" && this.password === "123456") {
      this.roter.navigateByUrl('movie');
    }
    else if(this.email === '' && this.password === '') {
      this.roter.navigateByUrl('login');
      alert("Enter your email and password");
    }
    else if(this.email !== '' && this.password === '') {
      this.roter.navigateByUrl('login');
      alert("Enter your password");
    }
    else if(this.email !== 'zaw1234@gmail.com' && this.password !== '123456') {
      this.roter.navigateByUrl('/login');
      alert("Your email and password are incorrect. Try again!");
    }
    else if(this.password !== '123456') {
      this.roter.navigateByUrl('/login');
      alert("Your password is incorrect. Try again!");
    }
    this.email = '';
    this.password = '';
  }

  show() {
    this.visible = !this.visible;
    this.type = !this.type;

    // const showMe = document.querySelector(".show");
    // const password = document.querySelector(".password");

    // showMe?.classList.toggle("bi-eye-slash-fill");
    // if(showMe?.classList.toggle("bi-eye-fill")) {
    //   password?.textContent = password?.
    // }
  }
}
