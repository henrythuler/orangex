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
  
}
