import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';

export interface Bird {
  id: number;
  name: string;
  quantity: number;
  location: string;
}

interface BirdsResponse {
  birds: Bird[];
}

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  birds: Bird[] = [{
    id: 1,
    name: "American Robin",
    quantity: 3,
    location: "Colorado Springs"
  },{
    id: 2,
    name: "Mountain Chickadee",
    quantity: 2,
    location: "Woodland Park"
  },{
    id: 3,
    name: "Western Tanager",
    quantity: 1,
    location: "Colorado Springs"
  }]

  constructor(private http: HttpClient) { }

  getBirds() {
    return this.http.get<BirdsResponse>("../assets/birds.json");
  }
}
