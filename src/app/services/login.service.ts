import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './models/login.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = 'https://localhost:7176';


  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: Login): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token)
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  logout(): void {
    localStorage.removeItem('token')   
    this.router.navigate([''])
  }

  isAuthenticated(): boolean {
    const token = this.getToken()
    return !!token;
  }

}
