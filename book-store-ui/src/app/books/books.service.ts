import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Books } from './books';
import { CreateOrUpdateBook } from './create-or-update-book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl = 'http://localhost:3000';
  private booksUrl = `${this.baseUrl}/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books[]> {
    console.log(this.booksUrl);
    return this.http.get<Books[]>(this.booksUrl).pipe(
      catchError(this.handleError)
    );
  }

  create(book: CreateOrUpdateBook): Observable<Books> {
    return this.http.post<Books>(this.booksUrl, book).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: string): Observable<Books> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Books>(url).pipe(
      catchError(this.handleError)
    );
  }

  update(id: string, book: CreateOrUpdateBook): Observable<void> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.put<void>(url, book).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<void> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
