import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  constructor(private http: HttpClient) { }

  getBirds() {
    return this.http.get<BirdsResponse>("http://localhost:8080/birds");
  }

  deleteBird(id: number) {
    return this.http.delete<Bird>(`http://localhost:8080/birds/${id}`).subscribe()
  }

  addBird(newBird: NewBird) {
    return this.http.post("http://localhost:8080/birds", newBird, httpOptions).subscribe()
  }

  editBird(updatedBird: Bird) {
    return this.http.put(`http://localhost:8080/birds/${updatedBird.id}`, updatedBird, httpOptions).subscribe()
  }
}
