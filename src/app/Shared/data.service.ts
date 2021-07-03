import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Notes } from './Notes.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  onPostNotes(NoteForm: { title: string; desc: string }) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        let username = localStorage.getItem('UserName');
        return this.http.post<{ name: string }>(
          'https://takeanote-7ed14-default-rtdb.firebaseio.com/' +
            username +
            '.json',
          NoteForm,
          {
            params: new HttpParams().set('auth', user._token),
          }
        );
      })
    );
  }
  onFetchNotes() {
    let username = localStorage.getItem('UserName');
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<{ [key: string]: Notes }>(
          'https://takeanote-7ed14-default-rtdb.firebaseio.com/' +
            username +
            '.json',
          {
            params: new HttpParams().set('auth', user._token),
          }
        );
      }),
      map((responseData) => {
        const postsArray: Notes[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }
  onClearNotes() {
    let username = localStorage.getItem('UserName');
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.delete(
          'https://takeanote-7ed14-default-rtdb.firebaseio.com/' +
            username +
            '.json',
          {
            params: new HttpParams().set('auth', user._token),
          }
        );
      })
    );
  }
  onStoreReview(ReviewForm: { Subject: string; Text: string }) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.post<{ name: string }>(
          'https://takeanote-7ed14-default-rtdb.firebaseio.com/Reviews.json',
          ReviewForm,
          {
            params: new HttpParams().set('auth', user._token),
          }
        );
      })
    );
  }
}
