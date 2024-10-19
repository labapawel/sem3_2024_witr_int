import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Kasa } from './kasa';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class MojakasaService {
 
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
  }

  save(){
    localStorage.setItem("3sem_kasa", JSON.stringify(this.daneKasy))
  }

  constructor() {
    this.load();
  }

  add(dane: Kasa){
    this.daneKasy.push(dane);
    this.save();
    this.sub.next(this.daneKasy);
  }

  subscribe() {
    return this.sub.asObservable();
  }
}
