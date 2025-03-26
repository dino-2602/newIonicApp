import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async signUp(user:any) {
    // const apiAddress = "http://localhost:8102";
     const userInfo =   {
     'username': user['email'],
     'email': user['email'],
     'firstName': user['first_name'],
     'lastName': user['last_name'],
     'phone': user['phone'],
     'password': user['password'],
     'type': 'client',
     'stripeId': '1'
     };
     console.log(userInfo);
     return this.http.post('http://localhost:3000/login/register',userInfo).toPromise();
  }

 async logIn(username: string, password: string) {
   console.log("Login: "+username);
   return this.http.post(`http://localhost:3000/login/login`, { username, password }).toPromise();
 }
}
