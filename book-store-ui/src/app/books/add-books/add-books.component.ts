import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { CreateOrUpdateBook } from '../create-or-update-book';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  imports: [FormsModule, NgIf, RouterModule]
})
export class AddBooksComponent implements OnInit {
  book: CreateOrUpdateBook = {
    title: '',
    author: '',
    genre: '',
  };

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.booksService.create(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
