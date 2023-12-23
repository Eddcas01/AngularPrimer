import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//punto de entrada de la aplicacion 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
