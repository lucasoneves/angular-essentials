import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { User } from './user/user';
import { UserCard } from './user-card/user-card';
import { DUMMY_USERS } from './dummy-users';

@Component({
  imports: [RouterOutlet, Header, User, UserCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS
  protected readonly title = signal('angular-essentials');
}
