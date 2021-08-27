import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book:any;
  constructor(private bookService: BookService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  // @ts-ignore
  id = +this.activatedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.bookService.getBookById(this.id).subscribe(res => {
      this.book = res;
    })
  }

  deleteBook(){
    if (confirm('Are you sure?')){
      this.bookService.delete(this.id).subscribe(res => {
        this.router.navigate(['books/list']).then();
      })
    }
  }

}
