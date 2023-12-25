import { Injectable } from '@angular/core';
import { Games } from '../interfaces/games';

@Injectable({
  providedIn: 'root'
})
export class ServiceGamesService {
  games:Games[] = [
    {
      id:1,
      name: 'uncharted 4'
    
    },
    {
      id:2,
      name:'spiderman'
    },
    {
      id:3,
      name:'god of war'
    }
    
    ]

    getGames():Games[] {

      return this.games;
    }
  
  constructor() { }
}
