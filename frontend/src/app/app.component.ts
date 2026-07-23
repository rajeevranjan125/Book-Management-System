import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  id?: number;
  title: string;
  author: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  form: Book = { title: '', author: '', price: 0 };
  isSubmitting = false;
  feedback = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.http.get<Book[]>('http://localhost:8080/api/books').subscribe({
      next: (books) => this.books = books,
      error: () => this.feedback = 'Unable to load books from the backend.'
    });
  }

  addBook(): void {
    if (!this.form.title || !this.form.author || this.form.price <= 0) {
      this.feedback = 'Please enter a title, author, and a positive price.';
      return;
    }

    this.isSubmitting = true;
    this.feedback = '';

    this.http.post<Book>('http://localhost:8080/api/books', this.form).subscribe({
      next: () => {
        this.form = { title: '', author: '', price: 0 };
        this.loadBooks();
        this.isSubmitting = false;
        this.feedback = 'Book saved successfully.';
      },
      error: () => {
        this.isSubmitting = false;
        this.feedback = 'Failed to save the book.';
      }
    });
  }
}
