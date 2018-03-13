import { Routes } from '@angular/router';
import { EntryListComponent } from './components/journal/entry-list/entry-list.component'

export const routes: Routes = [
    { path: '', redirectTo: 'journals', pathMatch: 'full' },
    { path: 'journals', component: EntryListComponent }
];
