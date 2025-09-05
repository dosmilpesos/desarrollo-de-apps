import { Routes } from '@angular/router';
import { TextoComponent } from './paginas/texto/texto.component';
import { DoomComponent } from './paginas/doom/doom.component';
import { TypescriptComponent } from './paginas/typescript/typescript.component';
import { SumaComponent } from './paginas/suma/suma.component';

export const routes: Routes = [
    { path: 'texto', component: TextoComponent },
    { path: 'doom', component: DoomComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'suma', component: SumaComponent }
];
