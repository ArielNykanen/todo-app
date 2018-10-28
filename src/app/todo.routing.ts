import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { TodoEditComponent } from './todo-main/todo-edit/todo-edit.component';
import { TodoCompletedComponent } from './todo-main/todo-completed/todo-completed.component';

const appRouter: Routes = [
  {path: 'main', component: TodoMainComponent, children: [
  ]},

  {path: 'completedTasks', component: TodoCompletedComponent},

  {path: 'edit/:id', component: TodoEditComponent, children: [
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],

  exports: [RouterModule]
})
export class ToDoRoutingModule {
}
