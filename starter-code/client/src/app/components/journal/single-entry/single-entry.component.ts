import { JournalService } from './../../../shared/services/journal.service';
import { Component, OnInit } from '@angular/core';
import { Journal } from '../../../shared/models/journal.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journal: Journal = new Journal();

  constructor(
    private routes: ActivatedRoute,
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        this.journalService.get(params['id'])
          .subscribe(
            (journal) => { this.journal = journal }
          );
      });
  }

}
