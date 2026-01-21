import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-listado-personas',
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './listado-personas.html',
  styleUrl: './listado-personas.css',
})
export class ListadoPersonas {

}
