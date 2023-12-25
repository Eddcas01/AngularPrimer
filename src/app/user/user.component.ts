import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { SistemasOperativos } from '../interfaces/sistemas-operativos';
import { ServiceService } from '../core/service.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //un arreglo definido por unar interface sistemas operativos creada con angular cli



sistemas:ServiceService = inject(ServiceService);
sistemasOperativos: SistemasOperativos[] = this.sistemas.getSistemasOperativos()

username= 'eddcas'
islogged = false;
favGame = '';
isEditable = true;

getFavorite(gameName:string) {

  this.favGame = gameName

}

onMouseover(username:string){

alert('Hola al usuario'+username)

}

greet(){
  alert('Hola A todos');
}


}
