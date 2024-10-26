import { Component, Input } from '@angular/core';
import { Kasa } from '../kasa';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-kasa-element',
  standalone: true,
  imports: [NgClass],
  templateUrl: './kasa-element.component.html',
  styleUrl: './kasa-element.component.scss'
})
export class KasaElementComponent {
  @Input() daneElementu : Kasa = {aktywnosc:false, date: new Date(), id:-1, kwota:0, nazwa:"", rodzaj:"", status:0}

}
