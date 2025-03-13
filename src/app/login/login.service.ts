import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginSuccessful: boolean = false;
  constructor() { }
  setLoginSuccessful(value: boolean) {
    this.loginSuccessful = value;
  }
  getLoginSuccessful(): boolean {
    return this.loginSuccessful;
  }
}
