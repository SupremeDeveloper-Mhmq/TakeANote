import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { DeleteNotesComponent } from './delete-notes/delete-notes.component';
import { ConfigNotesComponent } from './config-notes/config-notes.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNotesComponent,
    DeleteNotesComponent,
    ConfigNotesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
