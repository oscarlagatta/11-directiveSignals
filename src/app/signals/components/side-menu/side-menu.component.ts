import {Component, signal} from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  // public menuItems: MenuItem[] = [
  //   {
  //     title: 'Counter', route: 'counter'
  //   },
  //   {
  //     title: 'User', route: 'user-info'
  //   },
  //   {
  //     title: 'Mutations', route: 'properties'
  //   },
  // ];

  // solidJs and Qwik / React will implement
  // less rendering more fast in notifying all places where it's used
  public menuItems = signal<MenuItem[]>([
      {
        title: 'Counter', route: 'counter'
      },
      {
        title: 'User', route: 'user-info'
      },
      {
        title: 'Mutations', route: 'properties'
      }
  ]);

}
