import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ServiceGamesService } from '../core/service-games.service';
import { Games } from '../interfaces/games';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
<h3>Los juegos favoritos de {{username}}</h3>

<ul>
    @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{game.name}}</li>

    }
  </ul>
  `,
  styles: ``
})
export class GamesComponent {

  gameservice:ServiceGamesService = inject(ServiceGamesService);
  games: Games[] = this.gameservice.getGames()
  
  
@Input() username: string = '';
@Output() addFavoriteEvent = new EventEmitter<string>();

fav(gameName:string){

  this.addFavoriteEvent.emit(gameName);

}


}
