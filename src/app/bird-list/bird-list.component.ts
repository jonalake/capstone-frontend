import { Component, OnInit } from '@angular/core';
import { Bird, BirdService } from '../bird.service';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {
  birds: Bird[] = [];

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
    this.birdService.getBirds().subscribe(response => {
      return this.birds = response.birds
    })
  }

}
