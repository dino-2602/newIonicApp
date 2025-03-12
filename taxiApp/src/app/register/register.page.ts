import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { APIServiceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
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
    private menuCtrl: MenuController,
    private api: APIServiceService,
  ) {}

  ngOnInit() {
  }

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
  async getFormValidationErrors() {
    let error = '';
    Object.keys(this.userForm.controls).forEach(key => {
    });
    const errMsg = error.slice(0, -3);
  }

  async registerUser() {
    if (!this.userForm.valid) {
      this.getFormValidationErrors();
      return;
    }

    this.setSpinner();

    this.api.signUp(this.userForm.value).subscribe({
      next: async (res) => {
        console.log('✅ User registered successfully:', res);
        this.clearSpinner();
      },
      error: async (err) => {
        console.error('❌ Registration failed:', err);

        this.clearSpinner();
      }
    });
  }


}
