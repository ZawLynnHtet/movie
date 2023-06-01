import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

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

  constructor(
    private roter:Router,
    private auth: AuthService) {
  }

  ngOnInit(): void {
    
  }
  signIn() {
    this.auth.setToken();
    if(this.email === "zaw1234@gmail.com" && this.password === "123456") {
      this.roter.navigateByUrl('page');
    }
    else if(this.email === '' && this.password === '') {
      this.roter.navigateByUrl('login');
    }
    else if(this.email !== '' && this.password === '') {
      this.roter.navigateByUrl('login');
    }
    else if(this.email !== 'zaw1234@gmail.com' && this.password !== '123456') {
      this.roter.navigateByUrl('/login');
    }
    else if(this.password !== '123456') {
      this.roter.navigateByUrl('/login');
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
