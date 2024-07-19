import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loginError!: string;
  loading!: boolean;

  constructor(private builder: FormBuilder, private accountService: AccountService, private router: Router){}

  ngOnInit(){
    this.loginForm = this.builder.nonNullable.group({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'password': new FormControl('', Validators.required)
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(){
    this.loginError = ''
    this.loading = true;
    this.accountService.authenticate(this.email?.value, this.password?.value).subscribe({
      next: data => {
        this.loading = false
        localStorage.setItem('token', data.token)
        this.router.navigateByUrl('/ox')
      },
      error: err => {
        this.loginError = err
        this.loading = false
      }
    }
    )
  }

}
