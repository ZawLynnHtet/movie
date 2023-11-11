import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  resultData: any[] = [];
  loader: boolean = true;

  constructor(
    private myData: DataService,
    private activatedRoute: ActivatedRoute,
    private result: DataService
  ) {}

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.params['query'];
    query &&
      this.result.searchMovies(query).subscribe({
        next: (response: any) => {
          this.resultData = response.results;
          if (this.resultData.length > 0) {
            this.loader = false;
          }
          console.log('unsubscribe');
        },
        error: (error: any) => {},
      });
  }
}
