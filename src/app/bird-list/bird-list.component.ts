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
  loading: boolean = true;

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
    this.birdService.getBirds.subscribe(response => {
      this.birds = response.birds
      this.filteredBirds = response.birds
      return this.birds.reverse(),
        this.filteredBirds.reverse(),
        this.loading = false;
    })
  }

  toggleSearch() {
    this.search = "";
    this.filteredBirds = this.birds
    this.searchActive = !this.searchActive;
  }

  searchBirds() {
    this.filteredBirds = this.birds.filter(bird =>
      bird.name.toLowerCase().includes(this.search.toLowerCase()) ||
      bird.location.toLowerCase().includes(this.search.toLowerCase()) ||
      bird.date.includes(this.search)
    )
  }

}
