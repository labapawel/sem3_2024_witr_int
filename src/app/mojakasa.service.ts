import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Kasa } from './kasa';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class MojakasaService {
  static lastID : number = 0;

  public static Statusy : Status[] = [
    {id:0, nazwa: "Normalny"},
    {id:100, nazwa: "Pilny"},
    {id:200, nazwa: "Nie wymagany"},
  ]
  private sub : BehaviorSubject<Kasa[]> = new BehaviorSubject<Kasa[]>([]);
  private daneKasy : Kasa[] = [];

  load() {
    let dane = localStorage.getItem("3sem_kasa");
    if(!dane) {
      dane = '[]';
    }

    this.daneKasy = JSON.parse(dane) as Kasa[];
    this.daneKasy.forEach(e=>{
      e.date = new Date(e.date);
    })
    this.sub.next(this.daneKasy);

    if(this.daneKasy.length)
    {
      MojakasaService.lastID = Math.max(...this.daneKasy.map(e=>e.id))
    }

  }

  save(){
    localStorage.setItem("3sem_kasa", JSON.stringify(this.daneKasy))
  }

  constructor() {
    this.load();
  }

  addOrUpdate(dane: Kasa){
    if(dane.id>0){
      let index = this.daneKasy.findIndex(e=>e.id==dane.id);
      if(index>=0){
        this.daneKasy[index] = dane;
      }
    } else {
      this.daneKasy.push(dane);
      dane.id = ++MojakasaService.lastID;
    }
    this.save();
    this.sub.next(this.daneKasy);
  }

  subscribe() {
    return this.sub.asObservable();
  }
}
