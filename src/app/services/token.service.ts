import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveToken(token: string){
    localStorage.setItem('token', token)
  }

  removeToken(){
    localStorage.removeItem('token')
  }

  getToken(): string{
    return localStorage.getItem('token') ?? ''
  }

  haveToken(): boolean{
    return !!localStorage.getItem('token')
  }

}
