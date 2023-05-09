import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ResultsComponent } from './results/results.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    // children: [
    //   {
    //     path: ':login',
    //     component: LoginComponent
    //   }
    // ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  },
  {
    path: 'details',
    component: MovieDetailsComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: ':movieIndex/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'result',
    component: ResultsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
