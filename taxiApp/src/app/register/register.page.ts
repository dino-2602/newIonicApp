import {Component, OnInit} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { ApiService } from '../api.service';
//import { InitUserProvider } from '@app/services/inituser/inituser.service';
//import { environment } from '@env/environment';
//import { UtilService } from '@app/services/util/util.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
//import { PushService } from '@app/services/push/push.service';
import {Preferences} from '@capacitor/preferences';
import {Toast} from "@capacitor/toast";

const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})

export class RegisterPage   {
  //public dialCodes = environment.COUNTRY_DIAL_CODES;
  userForm = new FormGroup({
    'first_name': new FormControl('', [Validators.required]),
    'last_name': new FormControl('', [Validators.required]),
    'phone': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });
  spinner = false;
  disabled = false;

  customAlertOptions: any = {
    header: 'Contact Number',
    subHeader: 'Select Area Code',
    translucent: true
  };
  constructor(
    //private menuCtrl: MenuController,
    private api: ApiService,
    private router: Router
    //private util: UtilService,
    //private push: PushService
  ) {}



  /*ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }*/

  setSpinner() {
    this.spinner = true;
    this.disabled = true;
  }

  clearSpinner() {
    this.spinner = false;
    this.disabled = false;
  }
  async getFormValidationErrors() {
    let error = '';

      Object.keys(this.userForm.controls).forEach(key => {

            // @ts-ignore
        const controlErrors: ValidationErrors = this.userForm.get(key).errors;
            if (controlErrors != null) {
              Object.keys(controlErrors).forEach(async keyError => {
                error += `${key} ${keyError} & `;
              });

        }
      });
      const errMsg = error.slice(0, -3);

    //const toast = await this.util.createToast(errMsg, false, 'top');
    //await toast.present();
  }

  async registerUser() {
    if (!this.userForm.valid) {
      this.getFormValidationErrors();
      return;
    }
    this.setSpinner();
    this.api.signUp(this.userForm.value)
      .then((res: any) => {
        if (res && res.token) {
          Preferences.set({ key: TOKEN_KEY, value: res.token });
          this.router.navigate(['/home']);
        } else {
          console.error('Token not found in response', res);
        }
      })
      .catch(async err => {
        console.log("ERROR: " + (err.error?.message || err.statusText));
        this.clearSpinner();
      });
  }
}
