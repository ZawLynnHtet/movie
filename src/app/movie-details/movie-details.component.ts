import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movieid?: string;
  movieindex?: number;

  result_movies: any[] = [];

  constructor(
    private router:Router,
    private moviesData:DataService,
    private activatedRoute:ActivatedRoute,
    private result: DataService
  ) {}

  ngOnInit(): void {

    this.result_movies = this.result.result_movies;

    this.movieid = this.activatedRoute.snapshot.params['id'];
    console.log(this.movieid);

    this.movieindex = this.activatedRoute.snapshot.params['movieIndex'];
  }
  
}
