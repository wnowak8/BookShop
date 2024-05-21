import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AllBooksComponent } from './books/all-books/all-books.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, AllBooksComponent],
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'book-store-ui';
}
