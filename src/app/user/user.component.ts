import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { SistemasOperativos } from '../interfaces/sistemas-operativos';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //un arreglo definido por unar interface sistemas operativos creada con angular cli
sistenasOperativos:SistemasOperativos[] =[
{
id: 'win',
name : 'windows',

},
{
  id: 'lin',
  name : 'linux',
},
{
  id: 'OSX',
  name : 'macosx'
}

]

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
