import { HttpModule } from '@angular/http';
import { JournalService } from './shared/services/journal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EntryListComponent } from './components/journal/entry-list/entry-list.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { SingleEntryComponent } from './components/journal/single-entry/single-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
