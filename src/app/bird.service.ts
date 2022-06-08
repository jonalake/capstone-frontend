import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Bird {
  name: string;
  quantity: number;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  birds: Bird[] = [{
    name: "American Robin",
    quantity: 3,
    location: "Colorado Springs"
  },{
    name: "Mountain Chickadee",
    quantity: 2,
    location: "Woodland Park"
  },{
    name: "Western Tanager",
    quantity: 1,
    location: "Colorado Springs"
  }]

  constructor() { }

  getBirds() {
    return of(this.birds)
  }
}
