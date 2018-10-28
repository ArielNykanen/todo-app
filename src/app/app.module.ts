import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { HeaderComponent } from './header/header.component';
import { TodoEditComponent } from './todo-main/todo-edit/todo-edit.component';
import { ToDoRoutingModule } from './todo.routing';
import { TodoCompletedComponent } from './todo-main/todo-completed/todo-completed.component';
import { ToDoServices } from './todo-main/todo.services';


@NgModule({
  declarations: [
    AppComponent,
    TodoMainComponent,
    HeaderComponent,
    TodoEditComponent,
    TodoCompletedComponent,
  ],
  imports: [
    BrowserModule,
    ToDoRoutingModule,
    FormsModule,
  ],
  providers: [ToDoServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
