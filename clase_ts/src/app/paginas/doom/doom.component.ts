import { Component } from '@angular/core';

@Component({
  selector: 'app-doom',
  standalone: true,
  imports: [],
  templateUrl: './doom.component.html',
  styleUrl: './doom.component.css'
})
export class DoomComponent {
ngOnInit(): void {
    const input = document.getElementById('input') as HTMLInputElement;
    const agregarBtn = document.getElementById('AgregarBtn') as HTMLButtonElement;
    const lista = document.getElementById('lista') as HTMLUListElement;

    if (agregarBtn && input && lista) {
      agregarBtn.addEventListener('click', () => {
        const texto = input.value.trim();
        if (!texto) return;

        const li = document.createElement('li');
        li.textContent = texto;
        lista.appendChild(li);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => {
          lista.removeChild(li);
        });
        li.appendChild(eliminarBtn);

        input.value = '';
        input.focus();
      });
    }
  }
}
