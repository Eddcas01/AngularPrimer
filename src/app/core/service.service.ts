import { Injectable } from '@angular/core';
import { SistemasOperativos } from '../interfaces/sistemas-operativos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
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

  constructor() {  }

  getSistemasOperativos():SistemasOperativos[] {

    return this.sistenasOperativos;
  }
}
