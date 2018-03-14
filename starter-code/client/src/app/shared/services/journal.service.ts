import { environment } from './../../../environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Journal } from '../models/journal.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JournalService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly JOURNAL_API = `${JournalService.BASE_API}/journal-entries`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: JournalService.defaultHeaders });

  constructor(private http: Http) { }

  list(): Observable<Array<Journal>> {
    return this.http.get(JournalService.JOURNAL_API, JournalService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Journal> {
    return this.http.get(`${JournalService.JOURNAL_API}/${id}`, JournalService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(`Journal Service error: ${error.json()}`);
    }
    return Observable.throw(error.json());
  }

}
