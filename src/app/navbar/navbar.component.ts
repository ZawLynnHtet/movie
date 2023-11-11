import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  result: string = '';
  resultData: any[] = [];
  button: boolean = true;
  private subs = new SubSink();

  constructor(
    private myData: DataService,
    private router: Router,
    private auth: AuthService,
    private searchResult: DataService
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated() == true) {
      this.button = false;
      console.log('token');
    }
  }

  signOut() {
    this.auth.clearToke();
    this.button = true;
  }

  search(val: string) {
    console.log(this.result);
    this.router.navigateByUrl(`result/${val}`);
  }

  searchMovie(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.subs.sink = this.searchResult.searchMovies(element.value).subscribe({
        next: (response: any) => {
          this.resultData = response.results;
          console.log('unsubscribe');
        },
        error: (error: any) => {},
      });
    }
  }

  hide() {
    // this.resultData = [];
  }
}
