import {Component, OnInit} from '@angular/core';
import {User} from '../../class/user';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUsersComponent implements OnInit {
  public user: User;
  public textBtn: string;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
    this.textBtn = 'Añadir Usuario';
  }

  ngOnInit() {}

  onSubmit(user: User) {
    this.userService.createUser(user).subscribe((data: any) => {
        if (data.hasOwnProperty('data')) {
          alert('Usuario añadido correctamente, logee por favor');
          this.router.navigate(['/login']);
        } else {
          alert('Error al registrar el usuario');
        }
      },
      error => {
        switch(error.status){
          case 422:
            alert(error.error.error.message);
            break;
          default:
            alert('Error');
        }
      }
    );
  }
}
