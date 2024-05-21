import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { CommonModule } from '@angular/common';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EditBooksComponent } from './books/edit-books/edit-books.component';

@NgModule({
  declarations: [AllBooksComponent, AddBooksComponent, EditBooksComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule 
  ],
})
export class AppModule {}
