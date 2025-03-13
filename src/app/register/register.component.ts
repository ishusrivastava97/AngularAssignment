
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      gender: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')])
    });
  }

 

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      localStorage.setItem('registerData', JSON.stringify(formData));
      this.router.navigate(['/login']);
    }
  }

  onGoToLogin() {
    this.router.navigate(['/login']);
  }
}