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
  date: string;
}

interface NewBird {
  name: string;
  quantity: number;
}

interface BirdsResponse {
  birds: Bird[];
}

interface LocationResponse {
  region: string,
	city: string
}

interface IPResponse {
  ip: string;
}

const birdsEndpoint = environment.birdsEndpoint;
const defaultIP = "35.175.187.43";

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  ip = defaultIP
  location!: LocationResponse;
  constructor(private http: HttpClient) { }

  get getBirds() {
    return this.http.get<BirdsResponse>(birdsEndpoint);
  }

  getIP() {
    this.http.get<IPResponse>('https://api.ipify.org/?format=json').subscribe(response => {
      this.ip = response.ip;
    })
  }

  getLocation() {
    return this.http.get<LocationResponse>(`https://sika-http-proxy.herokuapp.com?url=http://ip-api.com/json/${this.ip}`)
  }

  deleteBird(id: number) {
    return this.http.delete<Bird>(`${birdsEndpoint}/${id}`).subscribe()
  }

  addBird(bird: NewBird) {
    this.getLocation().subscribe(location => {
      const newBird = {
        name: bird.name,
        quantity: bird.quantity,
        location: `${location.city}, ${location.region}`,
        date: `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`
      }
      return this.http.post(`${birdsEndpoint}`, newBird, httpOptions).subscribe()
    })
  }

  editBird(updatedBird: Bird) {
    return this.http.put(`${birdsEndpoint}/${updatedBird.id}`, updatedBird, httpOptions).subscribe()
  }
}
