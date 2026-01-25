import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { Persona } from '../../domain/entities/Persona';
import { PersonasUseCase } from '../../domain/usecases/PersonaUseCase';

@Component({
  selector: 'app-listado-personas',
  standalone: true,
  imports: [MatListModule, MatDividerModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './listado-personas.html',
  styleUrl: './listado-personas.css',
})
export class ListadoPersonas implements OnInit{
personasList: Persona[] = [];
    personaSeleccionada: Persona | null = null;
    isLoading = true;
    error: string | null = null;

    constructor(
        private useCase: PersonasUseCase,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.cargarPersonas();
    }

    cargarPersonas(): void {
        this.isLoading = true;
        this.error = null;

        this.useCase.getListaPersonas()
            .then(personas => {
                this.personasList = personas;
                this.isLoading = false;
                this.cdr.detectChanges();
            })
            .catch(err => {
                this.error = err instanceof Error ? err.message : "Error al cargar personas";
                this.isLoading = false;
                this.cdr.detectChanges();
            });
    }

    seleccionarPersona(persona: Persona): void {
        this.personaSeleccionada = persona;
    }

    formatearFecha(fecha: Date): string {
        return fecha.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    getIniciales(persona: Persona): string {
        return `${persona.nombre.charAt(0)}${persona.apellido.charAt(0)}`.toUpperCase();
    }

    recargarPersonas(): void {
        this.cargarPersonas();
    }
}