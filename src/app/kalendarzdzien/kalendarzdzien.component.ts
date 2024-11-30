import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import moment from 'moment';
import {Moment} from 'moment';
import { MojakasaService } from '../mojakasa.service';
import { Kasa } from '../kasa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kalendarzdzien',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './kalendarzdzien.component.html',
  styleUrl: './kalendarzdzien.component.scss'
})
export class KalendarzdzienComponent {
  @Input() dzienTygodnia:number = 0;
  @Input() typPola:string = 'dzien';
  @Input() dzien:Moment = moment();
  public day  = moment();

  constructor (private serv : MojakasaService, private router: Router) {}
  
  edycja(id: number){
    this.router.navigate(['/add', id]);
  }


  public jskiDzienTygodnia(): number {
    if(this.typPola == "naglowek")
        return this.dzienTygodnia;
    
    return this.dzien.isoWeekday();
    
  }

  public kasaNaDzis() : Kasa[] {
    return this.serv.wydatkiNaDzien(this.dzien.toDate())
  }

  public tenMiesiac(){
    return this.day.month() == this.dzien.month();
  }
  public dzis(){
    if(this.typPola == "dzien")
        return moment().format("yyyyMMDD") == this.dzien.format("yyyyMMDD")
    return false
  }

  public tekst():string{
    if(this.typPola == "naglowek") {
    this.day = moment().locale('pl');
      if(this.dzienTygodnia>0){
        this.day.day(this.dzienTygodnia)
        let dzien = this.day.format('dddd')
        return dzien.charAt(0).toUpperCase() + dzien.slice(1);
      }
    } else
    if(this.typPola == "dzien") {
      return this.dzien.format("DD");
    }
    return '';
  }

}
