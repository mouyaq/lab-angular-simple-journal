import { JournalService } from './../../../shared/services/journal.service';
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
  @Output() onCreate: EventEmitter<Journal> = new EventEmitter<Journal>()
  
  constructor(private journalService: JournalService) {}

  onSubmit(form: NgForm) {
    this.journalService
    .post(this.journal)
    .subscribe(journal => {
      this.onCreate.emit(journal);
      this.journal = new Journal();
      form.reset();
    });
  }

}
