import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';

const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  user = new FormGroup({
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });

  users_email: string = '';
  users_password: string = '';
  spinner = false;
  disabled = false;

  constructor(
    private menuCtrl: MenuController,
    private api: ApiService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  setSpinner() {
    this.spinner = true;
    this.disabled = true;
  }

  clearSpinner() {
    this.spinner = false;
    this.disabled = false;
  }

  async login() {
    this.setSpinner();

    this.users_email = this.user.controls['email'].value || '';
    this.users_password = this.user.controls['password'].value || '';

    this.api.logIn(this.users_email, this.users_password)
      .then((res: any) => {
        if (res && res.token) {
          Preferences.set({ key: TOKEN_KEY, value: res.token });
          this.router.navigate(['/home']);
        } else {
          console.error('Token not found in response', res);
        }

        console.log(this.users_email, this.users_password);
        console.log(res.token);
        console.log('Login was succesfull');
      })
      .catch(async err => {
        console.log("ERROR: " + (err.error?.message || err.statusText));
        await Toast.show({ text: err.error?.message || err.statusText });
        this.clearSpinner();
      });
  }
}
