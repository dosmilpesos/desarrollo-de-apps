import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TypescriptComponent } from "./paginas/typescript/typescript.component";
import { DoomComponent } from "./paginas/doom/doom.component";
import { TextoComponent } from "./paginas/texto/texto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TextoComponent, TypescriptComponent, DoomComponent], //poner los imports de angular
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
