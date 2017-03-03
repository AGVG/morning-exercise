import { Component } from '@angular/core';
import { SessionService } from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;
  privateData: string;

  constructor(private session: SessionService) { }

  login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  logout() {
    this.session.logout()
      .subscribe(
        () => this.user = null,
        (err) => this.error = err
      );
  }

  getPrivateData() {
  this.session.getPrivateData()
    .subscribe(
      (data) => this.privateData = data,
      (err) => this.error = err
    );
}
}
