import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// Tarea:
// Crear un módulo llamado ContadorModule
// declaraciones, y exportaciones

// Primero: Crear un módulo en la carpeta raíz contador
import { ContadorComponent } from './contador/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
    /* método que se encuentra en el archivo contador.component.ts
    - para que funcione es necesario importarlo (línea 5) */
  ],
  imports: [
    BrowserModule,
    HeroesModule // importación de la clase del archivo heroes.module.ts
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
