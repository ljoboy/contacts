import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {

  }

  getContact() {
    return this.http.get('http://localhost/contacts/api/contactsapi.html?q=&start=');
  }
}
