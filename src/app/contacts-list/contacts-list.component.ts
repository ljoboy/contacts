import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


  contacts: Array<Contact> = new Array<Contact>();


  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      const c: Contact = new Contact(Math.floor(Math.random() * 9999999999));
      c.id = i;
      this.contacts.push(c);
    }
  }

}
