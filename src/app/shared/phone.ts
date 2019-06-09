import {IPhone} from './iphone';
import {ITypes} from './itypes';

export class Phone implements IPhone {


  type: ITypes;
   private _numero: number;


  constructor(numero: number) {
    this._numero = numero;
  }


  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

}
