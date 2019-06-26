import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor(public contactservice: ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactservice.saveContact(this.contact)
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

}
