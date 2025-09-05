import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {
nuevoElemento: string = '';
  elementos: string[] = [];

  agregar() {
    if (this.nuevoElemento.trim()) {
      this.elementos.push(this.nuevoElemento);
      this.nuevoElemento = ''; // limpiar input
    }
  }

  borrar(index: number) {
    this.elementos.splice(index, 1); // elimina solo el seleccionado
  }
}
