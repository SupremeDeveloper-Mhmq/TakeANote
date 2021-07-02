import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from '../Shared/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.Data.onFetchNotes().subscribe((response) => {
      console.log(response);
    });
  }
}
