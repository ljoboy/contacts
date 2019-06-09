import {IContact} from './icontact';
import {Phone} from './phone';
import {IEmail} from './iemail';
import {IWebsite} from './iwebsite';

export class Contact implements IContact {
  cree_le: Date;
  etat: boolean;
  genre: string;
  id: number = null;
  img_url: string;
  nom: string;
  postnom: string;
  prenom: string;
  telephones: Array<Phone> = new Array<Phone>();
  emails: Array<IEmail> = new Array<IEmail>();
  websites: Array<IWebsite> = new Array<IWebsite>();


  constructor(numero: number, nom: string = '', prenom: string = '', postnom: string = '', genre: string = '', img_url: string = '') {
    this.cree_le = new Date();
    this.etat = true;
    this.genre = genre;
    this.img_url = img_url;
    this.nom = nom;
    this.postnom = postnom;
    this.prenom = prenom;
    this.addTelephone(numero);
  }


  addTelephone(numero: number): void {
    this.telephones.push(new Phone(numero));
  }


  addEmail(email: string): void {
    this.emails.push({'email': email});
  }


  addWebsite(url: string): void {
    this.websites.push({'url': url});
  }
}
