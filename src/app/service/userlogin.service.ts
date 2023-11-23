import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http : HttpClient) { }

  public loginMethod(userloginData : any) {
    console.log("Inside loginMethod");
    return this.http.post("http://localhost:8080/user/login", userloginData);
  }

  public registerUser(registerData : any) {
    return this.http.post("http://localhost:8080/users/register", registerData);
  }

  public getAllUsers() {
    return this.http.get("http://localhost:8080/users/allRecords");
  }

  public getById(id : any) {
    return this.http.get(`http://localhost:8080/users/getById/${id}`);
  }

  public updateUser(updatedData : any, id : any) {
    return this.http.put(`http://localhost:8080/users/updateUser/${id}`, updatedData);
  }

  public deleteUser(id : any) {
    return this.http.delete(`http://localhost:8080/users/deleteUser/${id}`);
  }

  public loginUser(token : any) {
    localStorage.setItem('token', token);   // add the token in the localStorage
    return true;
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
}
