import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../../service/userlogin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  // Datatypes
  registerData = {
    name:'',
    city:'',
    email:'',
    password:''
  }

  receivedData : any;
  id : any;

  constructor(
      private router : Router,
      private _route : ActivatedRoute,
      private userlogin : UserloginService
    ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['userId'];

    this.userlogin.getById(this.id).subscribe((data : any) => {
      this.receivedData = data;
      console.log(this.receivedData);

      this.registerData.name = this.receivedData.name;
      this.registerData.city = this.receivedData.city;
      this.registerData.email = this.receivedData.email;
    });
  }

  formSubmit() {
    this.userlogin.updateUser(this.registerData, this.id).subscribe((data : any) => {
      console.log(data);

      this.router.navigateByUrl('/welcome');
    });
  }

  back(){
    this.router.navigateByUrl('/welcome');
  }
}