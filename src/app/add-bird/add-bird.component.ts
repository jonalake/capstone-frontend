import { Component, OnInit } from '@angular/core';
import { Bird } from '../bird.service';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.css']
})
export class AddBirdComponent implements OnInit {
  name!: string;
  quantity!: number;
  location!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addBird() {
    const newBird = {
      name: this.name,
      quantity: this.quantity,
      location: this.location,
    }
    console.log(newBird)

    this.name = "";
    this.quantity = 1;
    this.location = "";
  }
}
