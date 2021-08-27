import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  formEditBook?:FormGroup;
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router,
              private acttivatedRoute: ActivatedRoute) { }
  // @ts-ignore
  id = +this.acttivatedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.bookService.getBookById(this.id).subscribe(res => {
      this.formEditBook = this.fb.group({
        title:[res.title],
        author:[res.author],
        description:[res.description]
      })
    }) ;
  }

  submit() {
    let data = this.formEditBook?.value;
      this.bookService.editBook(this.id,data).subscribe(res => {
        this.router.navigate(['books/list']).then();
      })
  }
}
