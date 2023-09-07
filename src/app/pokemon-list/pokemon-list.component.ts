import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../domain/Pokemon";
import {PokemonServiceService} from "../service/pokemon-service.service";
import {map} from "rxjs";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit{

  pokemons = new Array<any>()
  limit: number = 5
  offset: number = 0

  constructor(protected service: PokemonServiceService) {
  }

  ngOnInit() {
    this.service.getPokemons(this.offset,this.limit).subscribe((res: any) => {
      for(let i = 0; i < this.limit; i++) {
        let pokemon = new Pokemon()
        pokemon.name = res.results?.[i].name
        this.service.getPokemonItem(res.results?.[i].url).subscribe((res: any) => {
          pokemon.abilities = res.abilities
          pokemon.sprites = res.sprites.other.home.front_default
          pokemon.types = res.types
        })
        this.pokemons.push(pokemon)

      }
    })
  }

}
