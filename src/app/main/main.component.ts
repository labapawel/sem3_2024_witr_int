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
      return MojakasaService.suma(this.listaKasa).toFixed(2);
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

 
}
