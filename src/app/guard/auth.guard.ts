import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = window.localStorage.getItem("token")
  const router = inject(Router)
  if(token){
    return true
  }else{
    setTimeout(() => {
      router.navigateByUrl("/login")
    }, 0)
    return false
  }
};
