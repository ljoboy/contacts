import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {ContactsService} from '../services/contacts.service';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'add', component: AddContactComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactsListComponent,
    AddContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
