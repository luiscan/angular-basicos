import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    /* Aquí falta un paso más para que el componente sea reconocido */
    /* Dirigirse a app.module.ts para importarlo */
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 48;

    obtenerNombre(): string {
        // template literal con backtick (alt + 96)
        return `${ this.nombre } - ${ this.edad }`;
        //return this.nombre + ' - ' + this.edad;
    }

    // get no es un método, pertenece al concepto de encapsulamiento
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        console.log('hey...');
        this.edad = 30;
    }

}