import { Persona } from "../entities/Persona";

export interface IPersonaUseCase {
    getListaPersonas(): Promise<Persona[]>;
}