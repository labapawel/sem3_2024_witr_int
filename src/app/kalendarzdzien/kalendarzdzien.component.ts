import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-kalendarzdzien',
  standalone: true,
  imports: [NgClass],
  templateUrl: './kalendarzdzien.component.html',
  styleUrl: './kalendarzdzien.component.scss'
})
export class KalendarzdzienComponent {
  @Input() dzienTygodnia:number = 0;
  @Input() typPola:string = 'dzien';
  public day  = moment();

  constructor () {
 
  }



  public tekst():string{
    
    this.day = moment().locale('pl');
    console.log(this.dzienTygodnia);
    if(this.dzienTygodnia>0){
      this.day.day(this.dzienTygodnia)
      let dzien = this.day.format('dddd')
      return dzien.charAt(0).toUpperCase() + dzien.slice(1);
    }
    return '';
  }

}
