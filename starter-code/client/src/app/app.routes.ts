import { Routes } from '@angular/router';
import { EntryListComponent } from './components/journal/entry-list/entry-list.component';
import { SingleEntryComponent } from './components/journal/single-entry/single-entry.component';
import { EntryFormComponent } from './components/journal/entry-form/entry-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'journals', pathMatch: 'full' },
    { path: 'journals', component: EntryListComponent },
    { path: 'journals/create', component: EntryFormComponent },
    { path: 'journals/:id', component: SingleEntryComponent }
];
