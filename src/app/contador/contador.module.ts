
import { NgModule } from "@angular/core"; // Primera línea a digitar en el módulo
import { ContadorComponent } from './contador/contador.component';



@NgModule({ 
    // El decorador @NgModule posee los elementos: declarations (con los componentes), 
    // también exports (exporta los componentes de incluidos en cada subcarpeta de la raíz),
    // incluso puede ir la sentencia import, cuando se requiera de alguna directiva personalizada
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

// Angular está compuesta a mayor defi
export class ContadorModule{}