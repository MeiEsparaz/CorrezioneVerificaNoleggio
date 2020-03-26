import { Component } from '@angular/core';
import { Rent } from './rented.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rentList :Rent[]= new Array<Rent>();
  title = 'Auto';
}
