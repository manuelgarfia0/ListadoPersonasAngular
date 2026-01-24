import { Injectable, Inject } from "@angular/core";
import { Persona } from "../entities/Persona";
import { IPersonaRepository } from "../interfaces/IPersonaRepository";
import { REPOSITORY_PERSONAS_TOKEN } from "../../core/tokens";

@Injectable()
export class PersonasUseCase {

    constructor(
        @Inject(REPOSITORY_PERSONAS_TOKEN)
        private repository: IPersonaRepository
    ) {}

    getListaPersonas(): Promise<Persona[]> {
        return this.repository.getListadoCompletoPersonas();
    }
}