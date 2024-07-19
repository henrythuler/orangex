import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl: string = 'https://orangex-api.azurewebsites.net'

  constructor(private http: HttpClient){}

  authenticate(email: string, password: string): Observable<{token: string}>{

    return this.http.post<{token: string}>(`${this.apiUrl}/auth/login`, {email, password})

  }
  
  register(name: string, email: string, password: string, username: string, birth_date: Date){

    return this.http.post<{name: string, email: string, username: string, password: string, birth_date: Date}>(`${this.apiUrl}/auth/register`, {name, email, username, password, birth_date})

  }

  logout(){  }

  isLogged(): boolean{

    return !!localStorage.getItem('token')

  }

}
