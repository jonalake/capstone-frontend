import { Component, OnInit } from '@angular/core';
import { BirdService } from './bird.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private birdService: BirdService) {}
  ngOnInit(): void {
    this.birdService.getIP()
  }
  title = 'bird-tracker';
}
