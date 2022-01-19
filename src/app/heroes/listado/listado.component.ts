import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '' // || false || null || undefined;

  borrarHeroe() {
    console.log('borrando...');
    //this.heroes.pop(); // pop (borra el último elemento de un arreglo)
    //this.heroes = []; // Vacía todo el arreglo
    this.heroeBorrado = this.heroes.shift() || ''; // shift (borra el primer elemento del arreglo y lo retorna)
  }

}
