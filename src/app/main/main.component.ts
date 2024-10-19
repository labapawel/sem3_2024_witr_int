import { Component } from '@angular/core';
import { MojakasaService } from '../mojakasa.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor ( private serw : MojakasaService){
    serw.subscribe().subscribe( dane => {
      console.log(dane);
    })
  }

  add(){
    this.serw.add({aktywnosc:true, date: new Date(), 
            kwota:100, nazwa:"opis", rodzaj:"0", status:0})
  }
}
