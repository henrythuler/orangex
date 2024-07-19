import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../../validators/MyValidators';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  loading!: boolean;
  years: Number[] = [];
  days: Number[] = [];

  constructor(private builder: FormBuilder, private service: AccountService, private router: Router){}
  
  ngOnInit(){
    this.registerForm = this.builder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(55), MyValidators.notOnlyWhitespace]),
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(24), MyValidators.notOnlyWhitespace]),
      'username': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(24), MyValidators.notOnlyWhitespace]),
      'year': new FormControl('', Validators.required),
      'month': new FormControl('', Validators.required),
      'day': new FormControl('', Validators.required)
    })

    for(let i = new Date().getFullYear() - 120; i < new Date().getFullYear() - 17; i++){
      this.years.push(i)
    }

    for(let i = 1; i <= 31; i++){
      this.days.push(i)
    }
  }

  onSubmit(){
    this.service.register(this.name?.value, this.email?.value, this.password?.value, this.username?.value, new Date(this.year?.value, this.month?.value - 1, this.day?.value))
      .subscribe(
        {
          next: data => {
            console.log(data)
            this.router.navigateByUrl('/login')
          },
          error: err => {
            
          }
        }
      )
  }

  get name(){
    return this.registerForm.get('name')
  }
  
  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get username(){
    return this.registerForm.get('username')
  }

  get day(){
    return this.registerForm.get('day')
  }

  get month(){
    return this.registerForm.get('month')
  }

  get year(){
    return this.registerForm.get('year')
  }

}
