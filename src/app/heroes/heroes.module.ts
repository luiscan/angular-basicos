import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // declaraciones es un arreglo que posee las clases de cada archivo ts de cada subcarpeta
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // exports: cosas visibles fuera de este módulo, es decir cosas públicas, visibles en el html
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    // imports: arreglo que van sólo módulos
    imports: [
        CommonModule // Necesario para el uso de directivas personalizadas de Angular como: *ngFor y *ngIf
    ]
})

export class HeroesModule {

}