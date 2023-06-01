import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  result: string = '';
  resultData: any[] = [];
  button:boolean=true;

  constructor(
    private myData: DataService,
    private router:Router,
    private auth:AuthService) {}

  ngOnInit(): void {
    if(this.auth.isAuthenticated() == true) {
      this.button = false;
      console.log("token")
    }
  }

  signOut() {
    this.auth.clearToke();
    this.button = true;
  }

  search() {
    console.log(this.result);
    this.router.navigateByUrl("result");
  }
}
