import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from '../Shared/data.service';
import { Notes } from '../Shared/Notes.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  loadedNotes: Notes[] = [];
  ShowAddNotes!: boolean;
  ShowIcon!: boolean;
  error = null;

  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.Data.onFetchNotes().subscribe(
      (response) => {
        this.loadedNotes = response;
        if (this.loadedNotes.length < 1) {
          this.ShowAddNotes = true;
          this.ShowIcon = true;
        } else {
          this.ShowAddNotes = false;
          this.ShowIcon = false;
        }
      },
      (error) => {
        console.log(error);
        this.error = error.message;
      }
    );
  }
  onToggle() {
    this.ShowAddNotes = !this.ShowAddNotes;
    this.ShowIcon = !this.ShowIcon;
    this.Data.onFetchNotes().subscribe((response) => {
      this.loadedNotes = response;
    });
  }
  onClearPosts() {
    this.Data.onClearNotes().subscribe(() => {
      this.loadedNotes = [];
      Swal.fire('Deleted', 'Deleted All Notes', 'success');
    });
  }
}
