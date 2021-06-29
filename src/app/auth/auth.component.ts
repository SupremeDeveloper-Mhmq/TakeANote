import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  LoginMode = false;
  constructor() {}

  ngOnInit(): void {}
  onToggle() {
    this.LoginMode = !this.LoginMode;
  }
  onLoginSubmit(Loginform: NgForm) {
    console.log(Loginform.value);
    Loginform.reset();
  }
  onSignUpSubmit(SignUpform: NgForm) {
    console.log(SignUpform.value);
    SignUpform.reset();
  }
}
