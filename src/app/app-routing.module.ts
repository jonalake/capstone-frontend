import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdComponent } from './bird/bird.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: "/birds",
  pathMatch: "full"
}, {
  path: 'birds',
  component: BirdListComponent
}, {
  path: 'birds/:id',
  component: BirdComponent
}, {
  path: 'add',
  component: AddBirdComponent
}, {
  path: '**',
  component: PageNotFoundComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
