import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {IBook} from "../ibook";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book:any;
  constructor(private bookService: BookService,
              private act: ActivatedRoute,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }
  // @ts-ignore
  id = +this.activatedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
      this.getBook();
  }

  getBook() {
    this.bookService.getBookById(this.id).subscribe(res =>{
      this.book = res;
    })

  }

}
