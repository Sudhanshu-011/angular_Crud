import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../../service/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  //Datatypes
  registeredUsers : any;

  constructor(private userlogin : UserloginService, private router : Router) { }

  //Override
  ngOnInit(): void {
    this.userlogin.getAllUsers().subscribe((data : any)=>{
      this.registeredUsers = data;
      console.log(this.registeredUsers);
    })
  }

  updateUser(id : any) {
    this.router.navigateByUrl(`update/${id}`);
  }

  deleteUser(id : any) {
    this.userlogin.deleteUser(id).subscribe((data : any) => {
      console.log(data);
      this.registeredUsers = this.registeredUsers.filter((hero : {userId : any}) => hero.userId !== id);
    });
  }

  logout() {
    this.userlogin.logOut();
    this.router.navigateByUrl('/login');
  }
}
