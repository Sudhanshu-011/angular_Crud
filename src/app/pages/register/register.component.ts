import { Component } from '@angular/core';
import { UserloginService } from '../../service/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // Datatypes
  registerData = {
    name:'',
    city:'',
    email:'',
    password:''
  }

  constructor(private userlogin : UserloginService, private router : Router) { }

  // logic 
  public registerUser() {
    this.userlogin.registerUser(this.registerData)
      .subscribe((data : any)=>{
        console.log(data);
      })

    this.router.navigateByUrl('/login');
  }

  public loginPage() {
    this.router.navigateByUrl("/login");
  }
}
