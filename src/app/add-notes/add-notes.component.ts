import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notes } from '../Shared/Notes.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss'],
})
export class AddNotesComponent implements OnInit {
  Notes: Notes[] = [];
  constructor() {}
  onAddNote(AddForm: { NoteName: string; NoteData: string }) {
    console.log(AddForm.NoteName);
    console.log(AddForm.NoteData);
    Swal.fire('Added', 'Added', 'success');
  }
  ngOnInit(): void {}
}
