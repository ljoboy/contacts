import {Phone} from './phone';

export interface IContact {
  nom: string;
  postnom: string;
  prenom: string;
  cree_le: Date;
  etat: boolean;
  genre: string;
  img_url: string;
  telephones: Phone[];
}
