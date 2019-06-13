import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/contact';
import {HttpClient} from '@angular/common/http';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


  contacts: any;


  constructor(public http: HttpClient, public contactservices: ContactsService) { }

  ngOnInit() {

  }

  doSearch() {
    this.contactservices.getContact()
      .subscribe(data => {
        this.contacts = data;
      }, err => {
        console.log(err);
      });
  }

}
