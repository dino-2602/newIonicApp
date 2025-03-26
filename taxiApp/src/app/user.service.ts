import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _name: string;
  private _email: string;
  private _token: string;

  constructor() { 
    this._name = "";
    this._email = "";
    this._token = "";
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  async setToken(token: string){
    this._token = token;
  }

  get token() {
    return this._token;
  }


}
