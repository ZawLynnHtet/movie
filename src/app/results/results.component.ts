import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  resultData: any[] = [];

  constructor(private myData: DataService) {}

  ngOnInit(): void {
    this.resultData = this.myData.result_movies;
  }
}
