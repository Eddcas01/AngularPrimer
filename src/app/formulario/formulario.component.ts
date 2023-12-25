import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  favoriteFramework: string = ''
  formFormulario: FormGroup<any> = new FormGroup({

    name:new FormControl('', Validators.required),
    email: new FormControl('', Validators.required), 

  });

  handleFormSubmit(): void{
   
      alert(
        this.formFormulario.value.name + ' | ' + this.formFormulario.value.email
      );
    

  }

  enviarDatos(): void {

    alert('este es tu framework favorito '  + this.favoriteFramework)

  }
}
