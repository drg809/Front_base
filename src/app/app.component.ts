import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UsersService) {
  }
  title = 'MarketPlace';
  userId = localStorage.getItem('id');
  public navBar = {
    isNavbarCollapsed: true,
    produtos: {
      dropdown: true
    },
    usuarios: {
      dropdown: true
    }
  };
  public logout(){
    this.userService.logOut();
  }
}
