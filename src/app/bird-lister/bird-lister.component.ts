import { Component, Input, OnInit } from '@angular/core';
import { Bird } from '../bird.service';

@Component({
  selector: 'app-bird-lister',
  templateUrl: './bird-lister.component.html',
  styleUrls: ['./bird-lister.component.css']
})
export class BirdListerComponent implements OnInit {
  @Input() birds!: Bird[]
  constructor() { }

  ngOnInit(): void {
  }

}
