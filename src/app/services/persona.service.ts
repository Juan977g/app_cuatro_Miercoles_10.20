import { Service } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Service()
export class PersonaService {
    private listadePersonas: Persona [] = []

    guardar (persona : Persona){
        this.listadePersonas.push(persona)
        console.log(this.listadePersonas)

    }

    mostrar(){
        return this.listadePersonas
    }
}
