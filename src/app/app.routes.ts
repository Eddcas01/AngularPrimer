import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [

    {
        path: '',
        component: UserComponent,
        title: 'User',
    },
    {
        path: 'Formulario-Ingreso',
        component: FormularioComponent,
        title: 'Formulario'
    }


];
