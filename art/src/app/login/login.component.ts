import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuider: FormBuilder) {
    this.form = this.formBuider.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formBuider.group({
          deviceId: [],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: [""],
        }
        )

      }
    )
  }

  ngOnInit(): void {
  }
  get Email()
  {
    return this.form.get('email');
  }
  get Password()
  {
    return this.form.get('password');
  }

}
