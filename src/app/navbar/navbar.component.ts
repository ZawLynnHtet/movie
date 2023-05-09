import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  result: string = '';
  resultData: any[] = [];

  constructor(
    private myData: DataService,
    private router:Router) {}

  ngOnInit(): void {
    this.resultData = this.myData.result_movies;
  }

  search() {
    console.log(this.result);
    this.router.navigateByUrl("result");
  }
}
