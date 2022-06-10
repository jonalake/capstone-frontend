import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bird, BirdService } from '../bird.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {
  bird?: Bird
  birds!: Bird[]
  id: string = ""

  constructor(private birdService: BirdService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") || ""

    this.birdService.getBirds().subscribe(response => {
      this.birds = response.birds;
      this.bird = this.birds.find(bird => bird.id === +this.id)
    })

  }

}
