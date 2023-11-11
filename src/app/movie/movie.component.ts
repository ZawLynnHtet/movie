import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { throwIfEmpty } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit, OnDestroy {
  nowPlaying?: any;
  upComing?: any;
  topRated?: any;
  popular?: any;
  latest?: any;
  result_movies?: any;
  loader: boolean = true;
  private subs = new SubSink();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mydata: DataService,
    private result: DataService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  putMovies() {
    this.loader = false;

    this.result_movies = [
      {
        movies: this.nowPlaying,
        title: 'Now Playing Movies',
      },
      {
        movies: this.topRated,
        title: 'Top Rated Movies',
      },
      {
        movies: this.upComing,
        title: 'Upcoming Movies',
      },
      {
        movies: this.popular,
        title: 'Popular Movies',
      },
    ];
  }

  getMovies() {
    this.subs.sink = this.result.nowPlayingMovies().subscribe({
      next: (response: any) => {
        this.nowPlaying = response.results;
        this.putMovies();
        console.log('unsubscribe');
      },
      error: (error: any) => {},
    });

    this.subs.sink = this.result.topRatedMovies().subscribe({
      next: (response: any) => {
        this.topRated = response.results;
        this.putMovies();
      },
      error: (error: any) => {},
    });

    this.subs.sink = this.result.upComingMovies().subscribe({
      next: (response: any) => {
        this.upComing = response.results;
        this.putMovies();
      },
      error: (error: any) => {},
    });

    this.subs.sink = this.result.popularMovies().subscribe({
      next: (response: any) => {
        this.popular = response.results;
        this.putMovies();
      },
      error: (error: any) => {},
    });
  }

  watchMovies(movieid: number, movieindex: number) {
    this.router.navigateByUrl('movie/' + movieindex + '/' + movieid);
  }
}
