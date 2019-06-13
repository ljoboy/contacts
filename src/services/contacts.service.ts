import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {

  }

  getContact(mc: string, start: number, size: number) {
    return this.http.get('http://localhost/contacts/api/contactsapi.html?q='
    + mc +
      '&size='
    + size +
      '&start='
    + start
    );
  }
}
