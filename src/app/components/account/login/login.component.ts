import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private builder: FormBuilder, private accountService: AccountService){}

  ngOnInit(){
    this.loginForm = this.builder.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    const email: string = this.loginForm.get('email')?.value
    const password: string = this.loginForm.get('password')?.value
    this.accountService.authenticate(email, password).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
