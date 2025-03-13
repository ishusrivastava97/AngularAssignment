import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  loginForm!:FormGroup;

  constructor(private loginService: LoginService,private router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }
  onSignUp(){
    this.router.navigate(['/register']);        
  }
  
  onSubmit(){
    if(this.loginForm.valid){
      const formData = this.loginForm.value;
      const localStorageValue = JSON.parse(localStorage.getItem('registerData') || '{}');
      if (formData.email === localStorageValue.email && formData.password === localStorageValue.password) {
      this.loginService.setLoginSuccessful(true);
    }
  
    }
  }
  onLogout(){
  
    this.loginService.setLoginSuccessful(false);
  
    this.router.navigate(['/login']);
    this.loginForm.get('email')?.reset();
    this.loginForm.get('password')?.reset();
  }
  get loginSuccessful(): boolean {
    return this.loginService.getLoginSuccessful();
  }
  onContinueShopping(){
    this.router.navigate(['/']);
  }
}
