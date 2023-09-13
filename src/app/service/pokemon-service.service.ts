import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../domain/Pokemon";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(protected http: HttpClient) {

  }

  poke_url = "https://pokeapi.co/api/v2/"

  public getPokemons(offset: number, limit: number){
    return this.http.get(`${this.poke_url}pokemon/?offset=${offset}&limit=${limit}`)
  }

  public getPokemonItem(url: string){
    return this.http.get(url)
  }

  public getPokemonPage(id: string){
    return this.http.get(`${this.poke_url}pokemon/${id}`)
  }

}
