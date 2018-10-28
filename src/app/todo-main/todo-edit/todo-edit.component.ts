import { Component, OnInit } from '@angular/core';
import { ToDoServices } from '../todo.services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NoteModel } from '../todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  editableNote: NoteModel;
  noteId;
  updatedContent: string;
  constructor(private noteServices: ToDoServices, private route: ActivatedRoute, private router: Router) { }

  onUpdate() {
    this.noteServices.updateNote(this.noteId, this.updatedContent);
    this.router.navigate(['/main']);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editableNote = this.noteServices.getNoteById(params['id']);
      this.noteId = params['id'];
    });
  }

}
