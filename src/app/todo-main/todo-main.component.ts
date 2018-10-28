import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { NoteModel } from './todo.model';
import { ToDoServices } from './todo.services';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent implements OnInit, DoCheck {
  notes: NoteModel[];
  noteName: string;

  constructor(private noteServices: ToDoServices, private route: ActivatedRoute,
    private router: Router) { }

  onAddNote() {
    if (this.noteName) {
      this.noteServices.addNote(this.noteName);
    }
  }

  ngDoCheck() {
    this.noteServices.saveNoteChangesToLocal();
  }

  ngOnInit() {
    this.notes = this.noteServices.getLocalStorage();
  }

  onNoteRemove(noteId: number) {
    this.noteServices.removeNote(noteId);
  }

  onEdit(noteId: number) {
    this.router.navigate(['edit', noteId]);
  }
}
