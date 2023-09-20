import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Jhony";

  userData = {
    email: "jhony@email.com",
    role: "admin"

  }
  title = 'curso-angular';
}
