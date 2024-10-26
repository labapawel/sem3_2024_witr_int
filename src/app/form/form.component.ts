import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MojakasaService } from '../mojakasa.service';
import { Kasa } from '../kasa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public pole : string = ""
  public statusy = MojakasaService.Statusy;
  public dane : Kasa = {id:-1, aktywnosc:true, date: new Date(), kwota:0, nazwa:"", rodzaj:"0", 
                        status:0}

  getData() : string{
    const data = this.dane.date.toLocaleDateString().split('.'); // DD.MM.YYYY
    return data.reverse().join('-'); // YYYY-MM-DD
  }
  setDate(e:Event){
    const target = e.target as HTMLInputElement;
    this.dane.date = new Date(target.value);
  }

  public add(){
    this.serv.addOrUpdate(this.dane);
    this.router.navigate(['/']);
  }
  
  constructor ( private serv: MojakasaService, private router : Router){

  }
}
