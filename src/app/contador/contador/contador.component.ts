// Se necesita el decorador para convertir una simple clase en un componente propio de Angular
import { Component } from '@angular/core';

// Buscar: Qué son decoradores en Angular
@Component({
    selector: 'app-contador',
    // backtick (acento grave) alt + 96
    template: `
            <h1>Hola Mundo</h1>

            <!-- La doble llave permite importar código javascript a html -->
            <h1> {{ titulo }} </h1>

            <!--<h2> /*{{ 1 + 1 }}*/ </h2>-->

            <span> {{ undefined }} </span>

            <!-- En línea 11, el atributo número puede ser llamado sin this o bien con éste pero nadie utiliza this en el template -->
            <button (click)="acumular(+1)"> + 1 </button>

            <span> {{ numero }} </span>

            <button (click)="acumular(-1)"> - 1 </button>

            <br/><br/><br/>

            <h3>La base es 5:</h3>

            <button (click)="increm_Decrem( base )"> + 5 </button>

            <span> <strong> {{ numero2 }} </strong> </span>

            <button (click)="increm_Decrem( -base )"> - 5 </button>
        `
        })


        export class ContadorComponent {
            public titulo: string = 'Contador App';
            numero: number = 10;
            numero2: number = 5;
            base: number = 5;

            sumar() {
                // Se utiliza this porque se hace referencia al atributo de la clase
                this.numero += 1;
            }

            restar() {
                this.numero -= 1;
            }

            acumular( valor: number ) {
                this.numero += valor;
            }

            increm_Decrem( valor: number ) {
                this.numero2 += valor;
            }
        }