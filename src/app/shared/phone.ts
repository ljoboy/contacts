import {IPhone} from './iphone';
import {ITypes} from './itypes';

export class Phone implements IPhone {


  type: ITypes;
   private _numero: bigint;


  constructor(numero: bigint, type: string = '') {
    this.type.nomType = type;
    this._numero = numero;
  }


  get numero(): bigint {
    return this._numero;
  }

  set numero(value: bigint) {
    this._numero = value;
  }

}
