import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notes } from '../Shared/Notes.model';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../Shared/data.service';
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss'],
})
export class AddNotesComponent implements OnInit {
  Notes: Notes[] = [];
  Note!: string;

  constructor(private Data: DataService) {}
  onAddNote(AddForm: { title: string; desc: string }) {
    this.Data.onPostNotes(AddForm).subscribe((responseData) => {
      console.log(responseData);
      Swal.fire('Added', 'Added Note And Its Description', 'success');
    });
  }
  ngOnInit(): void {}
}
