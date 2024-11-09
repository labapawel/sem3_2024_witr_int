import { Component, Input } from '@angular/core';
import { Kasa } from '../kasa';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import moment from 'moment';
import 'moment/locale/pl';

@Component({
  selector: 'app-kasa-element',
  standalone: true,
  imports: [NgClass],
  templateUrl: './kasa-element.component.html',
  styleUrl: './kasa-element.component.scss'
})
export class KasaElementComponent {
  @Input() daneElementu : Kasa = {aktywnosc:false, date: new Date(), id:-1, kwota:0, nazwa:"", rodzaj:"", status:0}

  constructor (private router: Router){}
  edycja(){
    this.router.navigate(['/add', this.daneElementu.id]);
  }

  format(data: Date, format:string=""){
    moment().locale('pl');
    if(format)
      return moment(data).format(format);
    return moment(data).fromNow();
  }
}
