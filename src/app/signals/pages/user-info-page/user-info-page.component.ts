import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {SingleUserResponse, User} from "../../interfaces/user-reqruest.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UsersService);

  public userId = signal(1);
  public currentUser = signal<User|undefined>(undefined);
  public userFound = signal(true);

  public fullName = computed(() => {
    if (!this.currentUser()) return 'User not found';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name} `
  })

  ngOnInit() {
    this.loadUser(this.userId());
  }


  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.currentUser.set(undefined);

    this.userService.getUserById(id)
      .subscribe( {
        next: user => {
          this.currentUser.set(user);
          this.userFound.set(true);
        },
        error: err => {
          this.currentUser.set(undefined);
          this.userFound.set(false);
        }
      });
  }

}
