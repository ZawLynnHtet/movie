import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exhaustAll } from 'rxjs';
import { __values } from 'tslib';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userdata: any[] = [];

  email: string = '';
  password: string = '';
  visible:boolean=true;
  type:boolean=true;
    
  

  constructor(private router: Router,
    private auth: AuthService){}
  ngOnInit(): void {
    
  }
  signUp() {
    this.router.navigateByUrl('page')
    this.auth.setToken();
    this.email = '';
  }

  show() {
    this.visible = !this.visible;
    this.type = !this.type;
  }
}
