import { Component } from '@angular/core';
import { UserloginService } from '../../service/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Datatypes
  responseData : any; 

  userData = {
    email:'',
    password:''
  }

  constructor(private loginService : UserloginService, private router : Router) {}

  // Logics
  formSubmit() {
    console.log("Inside formSubmit");
    this.loginService.loginMethod(this.userData)
      .subscribe(
        (response: any) => {
          this.responseData = response;
          console.log(this.responseData);
          this.loginService.loginUser(response.jwtToken);
          console.log(response.jwtToken);
          this.router.navigateByUrl('/welcome');
        },
        (error: any) => {
          alert("Wrong Credentials!");
          console.error(error);
        }
      );   
  }

  registerPage() {
    this.router.navigateByUrl("/register");
  }
}
