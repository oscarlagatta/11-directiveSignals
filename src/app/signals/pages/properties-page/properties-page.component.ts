import {Component, signal} from '@angular/core';
import {User} from "../../interfaces/user-reqruest.interface";

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {


  // public user = signal<User>({
  //
  // })
  onFieldUpdated(field: string, value: string) {
    console.log(field, value)
  }
}
