import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Pokemon} from "../domain/Pokemon";
import {PokemonServiceService} from "../service/pokemon-service.service";
import {map} from "rxjs";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})

// , OnChanges ,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
export class PokemonListComponent implements OnInit{

  pokemons = new Array<any>()
  limit: any = 10
  offset: any = 0


  constructor(protected service: PokemonServiceService) {
  }

  public adicionarOffset(){
    this.offset += 10
    this.loadPokemons()
  }

  public zerarContagem(){
    this.offset = 10
    this.loadPokemons()
  }

  getPokemonUrl(url: string){
    url = url.replace("https://pokeapi.co/api/v2/pokemon/",'');
    console.log(url)
    window.location.href = `http://localhost:4200/pokemon-page/${url}`
  }

  loadPokemons(){
    this.service.getPokemons(this.offset,this.limit).subscribe((res: any) => {
      for(let i = 0; i < this.limit; i++) {
        let pokemon = new Pokemon()
        pokemon.name = res.results?.[i].name
        pokemon.url = res.results?.[i].url
        this.service.getPokemonItem(res.results?.[i].url).subscribe((res: any) => {
          pokemon.abilities = res.abilities
          pokemon.sprites = res.sprites.other.home.front_default
          pokemon.type = res.types[0].type.name
          pokemon.types = res.types
        })
        this.pokemons.push(pokemon)
      }
    })
  }



  ngOnInit() {
    this.loadPokemons()
  }
}
