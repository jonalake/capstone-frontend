import { Component, OnInit } from '@angular/core';
import { BirdService } from '../bird.service';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.css']
})
export class AddBirdComponent implements OnInit {
  name!: string;
  quantity!: number;
  location!: string;

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
  }

  addBird() {
    this.birdService.getLocation()
    const newBird = {
      name: this.name,
      quantity: this.quantity,
      location: this.location,
    }
    // this.birdService.addBird(newBird)

    this.name = "";
    this.quantity = 1;
    this.location = "";
  }
}
