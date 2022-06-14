import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bird-listing',
  templateUrl: './bird-listing.component.html',
  styleUrls: ['./bird-listing.component.css']
})
export class BirdListingComponent implements OnInit {
  @Input() name!: string;
  @Input() quantity!: number;
  @Input() location!: string;
  @Input() date!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
