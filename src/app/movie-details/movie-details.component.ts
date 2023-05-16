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
  nowPlaying?:any;
  upComing?:any;
  topRated?:any;
  popular?:any;
  result_movies?:any;
  loader:boolean=false;


  constructor(
    private router:Router,
    private moviesData:DataService,
    private activatedRoute:ActivatedRoute,
    private result: DataService
  ) {}

  ngOnInit(): void {

    this.getMovies();
    this.loader = true;

    this.movieid = this.activatedRoute.snapshot.params['id'];
    console.log(this.movieid);

    this.movieindex = this.activatedRoute.snapshot.params['movieIndex'];
  }

  putMovies() {
    this.result_movies = [
      {
        "movies": this.nowPlaying,
        "title": "Now Playing Movies"
      },
      {
        "movies": this.topRated,
        "title": "Top Rated Movies"
      },
      {
        "movies": this.upComing,
        "title": "Upcoming Movies"
      },
      {
        "movies": this.popular,
        "title": "Popular Movies"
      }
    ];
  }

  getMovies() {
    this.result.nowPlayingMovies().subscribe((response: any) => {
      this.nowPlaying = response.results;
      this.putMovies();
      console.table(this.nowPlaying)
    })
  

    this.result.topRatedMovies().subscribe((response: any) => {
      this.topRated = response.results;
      this.putMovies();
      console.log('result---',this.topRated)
    })
  

    this.result.upComingMovies().subscribe((response: any) => {
      this.upComing = response.results;
      this.putMovies();
      console.log('result---',this.upComing)
    });
  

    this.result.popularMovies().subscribe((response: any) => {
      this.popular = response.results;
      this.putMovies();
      console.log('result---',this.popular)
    });
  }
  
}
