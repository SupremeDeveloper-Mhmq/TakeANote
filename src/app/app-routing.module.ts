import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AuthComponent } from './auth/auth.component';
import { NotesComponent } from './notes/notes.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', redirectTo: '/Auth', pathMatch: 'full' },
  { path: 'Auth', component: AuthComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Notes', component: NotesComponent },
  { path: 'Review', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
