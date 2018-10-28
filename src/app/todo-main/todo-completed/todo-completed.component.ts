import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../todo.model';
import { ToDoServices } from '../todo.services';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnInit {
  completedNotes: NoteModel[];
  constructor(private noteServices: ToDoServices) { }

  onRemoveCompletedNote(noteId: number) {
    this.noteServices.removeCompletedOne(noteId);
  }

  ngOnInit() {
    this.completedNotes = this.noteServices.getCompletedLocalStorage();
  }

}
