import { Drive } from './driving.model';
import { VirtualTimeScheduler } from 'rxjs';

export class Rent{
  drive : Drive;
n_rent :number;
constructor(drive : Drive, n_rent : number)
{
this.drive=drive;
this.n_rent=n_rent;
}
}
