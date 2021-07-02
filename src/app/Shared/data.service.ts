import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Notes } from './Notes.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  onPostNotes(NoteForm: { NoteName: string; NoteDesc: string }) {
    return this.http.post<{ name: string }>(
      'https://takeanote-7ed14-default-rtdb.firebaseio.com/Notes.json',
      NoteForm
    );
  }
  onFetchNotes() {
    return this.http
      .get<{ [key: string]: Notes }>(
        'https://takeanote-7ed14-default-rtdb.firebaseio.com/Notes.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Notes[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key] });
            }
          }
          return postsArray;
        })
      );
  }
}