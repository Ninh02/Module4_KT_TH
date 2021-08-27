import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:any = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    })
  }

  // deleteBook(id:any){
  //   if (confirm('Are you sure?')){
  //     this.bookService.delete(id).subscribe(() => this.getAllBooks()
  //     )
  //   }
  // }

}
