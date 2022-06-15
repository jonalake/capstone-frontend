import { Component, OnInit } from '@angular/core';
import { Bird, BirdService } from '../bird.service';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {
  search: string = ""
  birds: Bird[] = [];
  filteredBirds: Bird[] = [];
  searchActive: boolean = false;

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
    this.birdService.getBirds.subscribe(response => {
      return this.birds = response.birds, this.filteredBirds = response.birds
    })
  }

  toggleSearch() {
    this.search = "";
    this.filteredBirds = this.birds
    this.searchActive = !this.searchActive;
  }

  searchBirds() {
    this.filteredBirds = this.birds.filter(bird =>
      bird.name.includes(this.search) ||
      bird.location.includes(this.search) ||
      bird.date.includes(this.search)
    )
  }

}
