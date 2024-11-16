import { Component } from '@angular/core';
import { KalendarzdzienComponent } from '../kalendarzdzien/kalendarzdzien.component';
import { NgFor } from '@angular/common';
import {Moment} from 'moment';
import moment from 'moment';

@Component({
  selector: 'app-kalendarz',
  standalone: true,
  imports: [KalendarzdzienComponent, NgFor],
  templateUrl: './kalendarz.component.html',
  styleUrl: './kalendarz.component.scss'
})
export class KalendarzComponent {
  private _data = moment().locale('pl');
  public newdate(nowaData:Moment) : void{

  }
  public tabDat: Array<any> = [];
  public obliczDni() {

  }

}
