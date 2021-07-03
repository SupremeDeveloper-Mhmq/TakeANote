import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../Shared/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  LoginMode = false;
  error!: string | null;
  isLoading = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onToggle() {
    this.LoginMode = !this.LoginMode;
  }
  onLoginSubmit(Loginform: NgForm) {
    if (!Loginform.valid) {
      Swal.fire('Form Is Not Valid', 'Please Fill the Form Correctly', 'error');
      return;
    }
    const email = Loginform.value.LoginEMail;
    const password = Loginform.value.LoginPassWord;
    this.isLoading = true;
    console.log(email);
    console.log(password);
    this.authService.Login(email, password).subscribe(
      (resData) => {
        console.log(resData);
        if (resData.registered) {
          localStorage.setItem('UserName', resData.localId);
        } else {
          Swal.fire('First Log In', 'Login First', 'error');
        }
        this.isLoading = false;
        Swal.fire(
          'Loged In Successfully',
          'You Have Logged In Successfully',
          'success'
        );
        this.router.navigate(['../Notes']);
      },
      (error) => {
        this.isLoading = false;
        this.error = 'An Error Occured';
        switch (error.error.error.message) {
          case 'EMAIL_NOT_FOUND': {
            this.error = 'You Have not Signed Up Yet.';
            Swal.fire('Email Not Found', error.error.error.message, 'error');
            break;
          }
          case 'INVALID_PASSWORD': {
            this.error = 'Your Password is Invalid';
            Swal.fire(
              'Password is Incorrect',
              'Type Password Carefully',
              'error'
            );
            break;
          }
          case 'USER_DISABLED': {
            this.error = 'Your Account is Disabled By admin';
            Swal.fire('Account Disabled', 'Try Again Later', 'error');
            break;
          }
        }
        console.log(error);
      }
    );
    Loginform.reset();
  }

  onSignUpSubmit(SignUpform: NgForm) {
    if (!SignUpform.valid) {
      Swal.fire('Form Is Not Valid', 'Please Fill the Form Correctly', 'error');
      return;
    }
    const email = SignUpform.value.SignUpEMail;
    const password = SignUpform.value.SignUpPassword;
    this.isLoading = true;
    console.log(email);
    console.log(password);
    this.authService.SignUp(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        Swal.fire(
          'Signed Up Successfully',
          'You Have Signed Up Successfully',
          'success'
        );
        this.LoginMode = true;
      },
      (error) => {
        this.isLoading = false;
        this.error = 'An Error Occured';
        switch (error.error.error.message) {
          case 'EMAIL_EXISTS': {
            this.error = 'This E-mail Already exists!';
            Swal.fire('Email Exists', error.error.error.message, 'error');
            break;
          }
          case 'OPERATION_NOT_ALLOWED': {
            this.error = 'This Operation Is Not Allowed';
            Swal.fire(
              'This Operation is Not Allowed',
              'Try Again Later',
              'error'
            );
            break;
          }
          case 'TOO_MANY_ATTEMPTS_TRY_LATER': {
            this.error = 'Server is Busy Try Again Later';
            Swal.fire('Server Is Busy', 'Try Again Later', 'error');
            break;
          }
        }
        console.log(error);
      }
    );
    SignUpform.reset();
  }
}
