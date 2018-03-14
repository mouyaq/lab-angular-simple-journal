import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Journal } from '../../../shared/models/journal.model';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {

  journal: Journal = new Journal();
  @Output() onCreate: EventEmitter<Journal> = new EventEmitter<Journal>();

  onSubmit(form: NgForm) {
    this.onCreate.emit(this.journal);
  }

}
