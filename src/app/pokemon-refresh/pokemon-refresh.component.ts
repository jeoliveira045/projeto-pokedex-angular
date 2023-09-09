import {Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pokemon-refresh',
  templateUrl: './pokemon-refresh.component.html',
  styleUrls: ['./pokemon-refresh.component.sass']
})
export class PokemonRefreshComponent{

  newLimit: number = 10
  newOffset: number = 0

  addLimit(){
    this.newLimit += 10
  }

}
