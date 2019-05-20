import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InsertUsersComponent } from './components/insert-user/insert-user.component';
import { LoginUsersComponent } from './components/login-user/login-user.component';

const routes: Routes = [
  {
    path: 'register',
    component: InsertUsersComponent
  },
  {
    path: 'login',
    component: LoginUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
