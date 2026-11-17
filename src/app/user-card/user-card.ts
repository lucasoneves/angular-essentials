import { Component, signal, computed, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {

  @Input() avatar!: string;
  @Input({ required: true}) name!: string;

  get imagePath() {
    return '/assets/' + this.avatar
  }

  onSelectUser() {
  }
}
