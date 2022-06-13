import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bird, BirdService } from '../bird.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {
  edit: boolean = false;
  bird: any;
  birds!: Bird[];
  id: string = "";
  name: string = "";
  quantity: number = 1;
  location: string = "";
  router: Router;


  constructor(private birdService: BirdService, private route: ActivatedRoute, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") || ""

    this.birdService.getBirds.subscribe(response => {
      this.birds = response.birds;
      this.bird = this.birds.find(bird => bird.id === +this.id)
    })

  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  editBird() {
    this.birdService.editBird(this.bird)
    this.toggleEdit()
  }

  onDelete() {
    this.birdService.deleteBird(+this.id);
    this.router.navigate(['/birds']).then(() => {window.location.reload()})
  }

}
