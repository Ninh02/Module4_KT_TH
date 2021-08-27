import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/books/book-list/book-list.component";
import {BookAddComponent} from "./components/books/book-add/book-add.component";
import {BookEditComponent} from "./components/books/book-edit/book-edit.component";
import {BookDetailComponent} from "./components/books/book-detail/book-detail.component";

const routes: Routes = [
  {
    path:'books',
    children:[
      {
        path:'list',
        component: BookListComponent
      },
      {
        path:'create',
        component: BookAddComponent
      },
      {
        path:':id/edit',
        component: BookEditComponent
      },
      {
        path:':id/detail',
        component: BookDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
