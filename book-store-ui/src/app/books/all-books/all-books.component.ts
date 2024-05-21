import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
  imports: [NgFor, RouterModule]
})
export class AllBooksComponent implements OnInit {
  books: Books[] = [];
  itemIdToDelete: string = '';
  deleteModal: any; // Consider typing deleteModal more precisely

  constructor(
    private booksService: BooksService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // Ensure deleteModal is initialized properly before using it
    if (isPlatformBrowser(this.platformId)) {
      this.initializeDeleteModal();
    }

    this.getAllBooks();

    // Add event listener for hidden.bs.modal event
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.listen(this.elementRef.nativeElement, 'hidden.bs.modal', () => {
        // Clear data associated with bs.modal to prevent memory leaks
        this.elementRef.nativeElement['bs.modal'] = null;
      });
    }
  }

  initializeDeleteModal(): void {
    // Check if bootstrap object exists in window before using it
    if (isPlatformBrowser(this.platformId) && window.bootstrap && window.bootstrap.Modal) {
      this.deleteModal = new window.bootstrap.Modal(
        document.getElementById('deleteModal')
      );
    } else {
      console.error('Bootstrap Modal not found');
    }
  }

  getAllBooks(): void {
    this.booksService.getBooks()
      .pipe(
        tap(data => this.books = data)
      )
      .subscribe({
        next: () => {},
        error: (error) => {
          console.error('Error fetching books', error);
        }
      });
  }

  openDeleteModal(id: string): void {
    this.itemIdToDelete = id;
    // Check if deleteModal is initialized before using it
    if (this.deleteModal) {
      this.deleteModal.show();
    } else {
      console.error('Delete modal not initialized');
    }
  }

  delete(): void {
    this.booksService.delete(this.itemIdToDelete).subscribe(() => {
      this.books = this.books.filter(
        (_) => _._id !== this.itemIdToDelete
      );
      // Check if deleteModal is initialized before using it
      if (this.deleteModal) {
        this.deleteModal.hide();
      } else {
        console.error('Delete modal not initialized');
      }
    });
  }
}
