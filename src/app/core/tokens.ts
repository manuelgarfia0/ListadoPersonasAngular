import { InjectionToken } from '@angular/core';
import { IPersonaRepository } from '../domain/interfaces/IPersonaRepository';
import { IPersonaUseCase } from '../domain/interfaces/IPersonaUseCase';

// Token para inyectar la implementación del repositorio de personas
export const REPOSITORY_PERSONAS_TOKEN = new InjectionToken<IPersonaRepository>('IPersonaRepository');

// Token para inyectar la implementación del UseCase de personas
export const PERSONAS_USECASE_TOKEN = new InjectionToken<IPersonaUseCase>('IPersonaUseCase');