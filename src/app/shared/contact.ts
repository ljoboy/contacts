import {IContact} from './icontact';
import {Phone} from './phone';
import {IEmail} from './iemail';
import {IWebsite} from './iwebsite';

export class Contact implements IContact {
  cree_le: Date;
  etat: boolean;
  genre: string;
  id: number;
  img_url: string;
  nom: string;
  postnom: string;
  prenom: string;
  telephones: Phone[];
  emails: IEmail[];
  websites: IWebsite[];


  constructor(numero: bigint, nom: string = '', prenom: string = '', postnom: string = '', genre: string = '', img_url: string = '') {
    this.cree_le = new Date();
    this.etat = true;
    this.genre = genre;
    this.img_url = img_url;
    this.nom = nom;
    this.postnom = postnom;
    this.prenom = prenom;
    this.addTelephone(numero);
  }


  addTelephone(numero: bigint): void {
    this.telephones.push(new Phone(numero));
  }


  addEmail(email: string): void {
    this.emails.push({'email': email});
  }


  addWebsite(url: string): void {
    this.websites.push({'url': url});
  }
}
