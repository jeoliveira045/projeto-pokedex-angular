import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {HomeComponent} from "./home/home.component";
import {PokemonPageComponent} from "./pokemon-page/pokemon-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon-list', component: PokemonListComponent },
  {path: 'pokemon-page/:id', component: PokemonPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
