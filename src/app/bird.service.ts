import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

export interface Bird {
  id: number;
  name: string;
  quantity: number;
  location: string;
}

interface NewBird {
  name: string;
  quantity: number;
  location: string;
}

interface BirdsResponse {
  birds: Bird[];
}

interface IpResponse {
  ip: string;
}

const birdsEndpoint = environment.birdsEndpoint;

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  ipAddress!: string;
  apiKey: string = "b6c8d6cbabe24c6c8e6223207220604";

  constructor(private http: HttpClient) { }

  get getBirds() {
    return this.http.get<BirdsResponse>(birdsEndpoint);
  }

  getLocation() {
    this.http.get<IpResponse>('https://api.ipify.org/?format=json').subscribe(response => {
      this.ipAddress = response.ip;
      this.http.get<any>(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.ipAddress}`).subscribe(response => {
        console.log(response)
      })
    })
  }

  deleteBird(id: number) {
    return this.http.delete<Bird>(`${birdsEndpoint}/${id}`).subscribe()
  }

  addBird(newBird: NewBird) {
    return this.http.post(`${birdsEndpoint}`, newBird, httpOptions).subscribe()
  }

  editBird(updatedBird: Bird) {
    return this.http.put(`${birdsEndpoint}/${updatedBird.id}`, updatedBird, httpOptions).subscribe()
  }
}
