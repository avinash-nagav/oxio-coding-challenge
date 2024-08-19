import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<Post[]> {
    const url = `${environment.apiUrl}/posts`;
    return this.http.get<Post[]>(url).pipe(
      catchError((err) => throwError(() => err))
    );
  }


}
