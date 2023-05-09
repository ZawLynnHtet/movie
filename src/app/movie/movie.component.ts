import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  result_movies: any[] = [];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private mydata: DataService,
    private result: DataService) {}

  ngOnInit(): void {
    // this.router = this.activatedRoute.snapshot.params

    this.result_movies = this.result.result_movies;

  }

  
    
  watchMovies(movieid:number, movieindex:number) {
    this.router.navigateByUrl(movieindex + "/" + movieid);
  }
}
