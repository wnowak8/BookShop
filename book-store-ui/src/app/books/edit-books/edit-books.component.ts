import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BooksService } from '../books.service';
import { CreateOrUpdateBook } from '../create-or-update-book';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-books',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './edit-books.component.html',
})
export class EditBooksComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService
  ) {}

  itemId: string = '';
  books: CreateOrUpdateBook = {
    title: '',
    author: '',
    genre: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.itemId = param.get('id') ?? '';
      this.getById();
    });
  }

  getById() {
    this.booksService.getById(this.itemId).subscribe((data) => {
      this.books.title = data.title;
      this.books.author = data.author;
      this.books.genre = data.genre;
    });
  }

  update() {
    this.booksService
      .update(this.itemId, this.books)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
