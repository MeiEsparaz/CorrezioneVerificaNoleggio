import { Component, OnInit, Input } from '@angular/core';
import { Rent } from '../rented.model';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
@Input()rentList : Rent[];
  constructor() { }

  ngOnInit(): void {
  }

}
