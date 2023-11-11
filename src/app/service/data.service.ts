import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private top_rated_movies =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=b950e622119a1e8e266eefe2dfef1b77&language=en-US&page=1';
  private now_playing_movies =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=b950e622119a1e8e266eefe2dfef1b77&language=en-US&page=1';
  private upcoming_movies =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=b950e622119a1e8e266eefe2dfef1b77&language=en-US&page=1';
  private popular_movies =
    'https://api.themoviedb.org/3/movie/popular?api_key=b950e622119a1e8e266eefe2dfef1b77&language=en-US&page=1';
  private latest_movies =
    'https://api.themoviedb.org/3/movie/latest?api_key=b950e622119a1e8e266eefe2dfef1b77&language=en-US';

  constructor(private http: HttpClient) {}

  topRatedMovies() {
    return this.http.get(`${this.top_rated_movies}`);
  }

  nowPlayingMovies() {
    return this.http.get(`${this.now_playing_movies}`);
  }

  upComingMovies() {
    return this.http.get(`${this.upcoming_movies}`);
  }

  popularMovies() {
    return this.http.get(`${this.popular_movies}`);
  }

  latestMovies() {
    return this.http.get(`${this.latest_movies}`);
  }

  searchMovies(name: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=b950e622119a1e8e266eefe2dfef1b77&language=en-US&page=1`
    );
  }
}
