import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor() { }

  ngOnInit() {
  }

  saveContact() {
    console.log(this.contact);
  }

}
