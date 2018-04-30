import { Pipe, PipeTransform } from '@angular/core';
import { Bien } from '../interface/bien';
import { TypeBien } from '../interface/type-bien';
import { Localite } from '../interface/localite';


@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(Biens: Bien[], Type: TypeBien[], localite: Localite[]): any {




  }

}
