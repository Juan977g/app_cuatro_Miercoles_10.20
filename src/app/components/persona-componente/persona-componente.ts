import { Component, inject, signal } from '@angular/core';
import { min, FormField, form, required } from '@angular/forms/signals';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  imports: [FormField],
  selector: 'app-persona-componente',
  styleUrl: './persona-componente.css',
  templateUrl: './persona-componente.html',
})
export class PersonaComponente {

  private personaService = inject(PersonaService)
  listadePersonas : Persona [] = []
  
  personaModelo = signal <Persona>({
    nombre: '',
    edad:0
  })

  constructor(){
    this.mostrar
  }

  personaFormulario = form(this.personaModelo, (esquema)=>{
    required(esquema.nombre, {message: 'Debe digitar un nombre'})
    min(esquema.edad, 18, {message: 'Debes ser mayor de edad'})
  })
  
  guardar(evento: Event){
    evento.preventDefault()
    let persona = {
    'nombre':this.personaModelo().nombre,
    'edad':this.personaModelo().edad
    }
    this.personaService.guardar(persona)
    this.limpiar
  }
  
  mostrar(){
    this.listadePersonas = this.personaService.mostrar()
  
  }
  limpiar(){
    this.personaModelo.set({nombre: '', edad:0})
  }
}

