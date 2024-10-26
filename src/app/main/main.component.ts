import { Component } from '@angular/core';
import { MojakasaService } from '../mojakasa.service';
import { KasaElementComponent } from '../kasa-element/kasa-element.component';
import { Kasa } from '../kasa';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [KasaElementComponent, NgFor, NgIf, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public listaKasa : Kasa[] = [];
  public get suma() : string{
      let wplaty = this.listaKasa.filter(e=>e.rodzaj == "0").reduce((acc, kasa: Kasa)=>acc+kasa.kwota, 0);
      let wyplaty = this.listaKasa.filter(e=>e.rodzaj == "1").reduce((acc, kasa: Kasa)=>acc+kasa.kwota, 0);
      return (wplaty - wyplaty).toFixed(2);
  }
  constructor ( private serw : MojakasaService){
    serw.subscribe().subscribe( dane => {

      this.listaKasa = dane.sort((a: Kasa,b : Kasa)=>{
        return a.rodzaj=="0" ? -1 : 1;
      });
    })
  }

 
}
