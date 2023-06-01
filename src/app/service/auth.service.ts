import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token')
    if(token) {
      return true;
    }else {
      return false;
    }
  }

  setToken(): void {
    const myToken = localStorage.setItem('token', 'lllll');
  }

  clearToke(): void {
    localStorage.clear();
  }
}
