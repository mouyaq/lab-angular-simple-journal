import { JournalService } from './../../../shared/services/journal.service';
import { Component, OnInit } from '@angular/core';
import { Journal } from '../../../shared/models/journal.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journals: Array<Journal> = [];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.list()
      .subscribe((journals) => this.journals = journals);
  }

}
