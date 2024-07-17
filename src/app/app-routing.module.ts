import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/social/feed/feed.component';
import { ProfileComponent } from './components/social/profile/profile.component';
import { HomeComponent } from './components/social/home/home.component';
import { JoinComponent } from './components/account/join/join.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'ox',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeedComponent
      },
      {
        path: ':username',
        component: ProfileComponent,
      }
    ],
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/join',
    pathMatch: 'full'
  },
  {
    path: 'join',
    component: JoinComponent
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
