import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JournalService } from './shared/services/journal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EntryListComponent } from './components/journal/entry-list/entry-list.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { SingleEntryComponent } from './components/journal/single-entry/single-entry.component';
import { EntryFormComponent } from './components/journal/entry-form/entry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
