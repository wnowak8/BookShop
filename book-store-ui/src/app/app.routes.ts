import { Routes } from '@angular/router';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { EditBooksComponent } from './books/edit-books/edit-books.component';

export const routes: Routes = [
    { path: '', component: AllBooksComponent },
    { path: 'add-book', component: AddBooksComponent },
    { path: 'edit-book/:id', component: EditBooksComponent },
  ];