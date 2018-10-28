import { NoteModel } from './todo.model';
import { OnChanges } from '@angular/core';

export class ToDoServices {
notes: NoteModel[] = [
  new NoteModel('example-1', '12.12.2012'),
];

completedNotes: NoteModel[] = this.getCompletedLocalStorage();



saveNoteChangesToLocal() {
  const notesJson = JSON.stringify(this.notes);
  const completedNotesJson = JSON.stringify(this.completedNotes);
  localStorage.setItem('notes', notesJson);
  localStorage.setItem('completedNotes', completedNotesJson);
}



getLocalStorage() {
  if (localStorage.getItem('notes')) {
    const  loadedNotes = localStorage.getItem('notes');
    this.notes = JSON.parse(loadedNotes);
    return this.notes;
  } else {
  return this.getNotes();
  }
}

getCompletedLocalStorage() {
  if (localStorage.getItem('completedNotes')) {
    const  loadedCompletedNotes = localStorage.getItem('completedNotes');
    this.completedNotes = JSON.parse(loadedCompletedNotes);
    return this.completedNotes;
  } else {
    return [];
  }
}

getNotes() {
  return this.notes;
}

getNoteById(noteId: number) {
  return this.notes[noteId];
}

getCompletedNotes() {
  return this.completedNotes;
}

addNote(note) {
  const createdDate = new Date();
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1;
  const day = createdDate.getDate();
  this.notes.push(new NoteModel (note, `${day}.${month}.${year}`));
}

updateNote(noteId: number, updatedNote: string) {
  this.notes[noteId].desc = updatedNote;
  this.saveNoteChangesToLocal();
}

removeNote(id: number) {
  this.completedNotes.push(this.notes[id]);
  this.notes.splice(id, 1);
}

removeCompletedOne(noteId: number) {
this.completedNotes.splice(noteId, 1);
this.saveNoteChangesToLocal();
}


}
