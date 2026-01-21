import { Persona } from "../entities/Persona";


export class PersonaUseCase implements IPersonaUseCase{
    async getListaPersonas(): Promise<Persona[]> {
        return ;
    }
}