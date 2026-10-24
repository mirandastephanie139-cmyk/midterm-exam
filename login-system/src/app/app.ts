import { Component } from '@angular/core';
import { LoginPage } from './login-page/login-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
