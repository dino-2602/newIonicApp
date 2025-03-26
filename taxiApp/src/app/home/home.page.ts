import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Preferences } from '@capacitor/preferences';

const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit{
  isAuthenticated: boolean = false;
  token = '';

  user: any;

  constructor(private userService: UserService) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Preferences.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit() {
    this.user = this.userService;
  }

  get userToken() {
    return this.token
  }

  get isUserLoggedIn() {
    return this.isAuthenticated;
  }

}
