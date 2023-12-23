import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
//componente raiz 

//decorador 
@Component({
  selector: 'app-root',//root en reaact 
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserComponent, CommentsComponent],//todos los modulos que necesitemos en este componente de
  templateUrl: './app.component.html',//renderizado 
  styleUrls: ['./app.component.css'],//]estilos renderizados 

})
export class AppComponent {
 city = 'San Francisco';
}
