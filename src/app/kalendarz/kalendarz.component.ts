import { Component } from '@angular/core';
import { KalendarzdzienComponent } from '../kalendarzdzien/kalendarzdzien.component';
import { NgClass, NgFor } from '@angular/common';
import {Moment} from 'moment';
import moment from 'moment';
import { Kasa } from '../kasa';
import { MojakasaService } from '../mojakasa.service';

@Component({
  selector: 'app-kalendarz',
  standalone: true,
  imports: [KalendarzdzienComponent, NgFor, NgClass],
  templateUrl: './kalendarz.component.html',
  styleUrl: './kalendarz.component.scss'
})
export class KalendarzComponent {

  public listaKasa : Kasa[] = [];
  public get suma() : number{
      return MojakasaService.suma(this.listaKasa);
  }
  constructor ( private serw : MojakasaService){
    serw.subscribe().subscribe( dane => {
      let now = new Date();
      this.listaKasa = dane
          .filter(e=>e.date.getFullYear() == now.getFullYear() && e.date.getMonth() == now.getMonth())
          .sort((a: Kasa,b : Kasa)=>{
                  return a.rodzaj=="0" ? -1 : 1;
                });
    })
  }
    
  public _data = moment().locale('pl');
  public newdate(nowaData:Moment) : void{

  }
  public tabDat: Array<any> = [];
  public tablicaDni(): Moment[] {
    let dni:Moment[] = [];
    let dzien = moment(this._data).startOf('month');
    dzien = dzien.day(1);
    while(dzien.month() <= this._data.month()){
      dni.push(dzien)
      dzien =  moment(dzien).add(1,'day');
    }
    while(dzien.day() == 0){
      dni.push(dzien)
      dzien =  moment(dzien).add(1,'day');
    }

   // console.log(dzien.month())
    return dni;
  }


}
