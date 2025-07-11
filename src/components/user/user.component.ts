import { Component } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private uService: UserService) {
  uService.testService();
}
displayUser() {

  console.log(this.uService.getUsers());
}
}
