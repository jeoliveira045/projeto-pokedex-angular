import {Component, OnInit} from '@angular/core';
import {PokemonServiceService} from "../service/pokemon-service.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../domain/Pokemon";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.sass']
})
export class PokemonPageComponent implements OnInit{

  pokemon: Pokemon = new Pokemon()

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonServiceService){

  }

  ngOnInit(){
    this.pokemon.moves = new Array<any>()
    this.activatedRoute.params.subscribe(res => {
      this.pokemonService.getPokemonPage(res['id']).subscribe(  (res:any) => {
        this.pokemon.name = res.name
        this.pokemon.type = res.types[0].type.name
        this.pokemon.abilities = res.abilities
        for(let i = 0; i < 6;i++){
          this.pokemon.moves?.push(res.moves[i])
        }
        this.pokemon.stats = res.stats
        this.pokemon.types = res.types
        this.pokemon.weight = res.weight
        this.pokemon.sprites = res.sprites.other.home.front_default
        console.log(this.pokemon)
      })
    })

  }

}
