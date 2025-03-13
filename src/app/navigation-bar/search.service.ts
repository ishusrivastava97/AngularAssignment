import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery: string = '';
  private searchQuerySubject: Subject<string> = new Subject();

  getSearchQuery(): string {
    return this.searchQuery;
  }

  updateSearchQuery(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.searchQuerySubject.next(searchQuery);
  }

  getSearchQueryObservable(): Observable<string> {
    return this.searchQuerySubject.asObservable();
  }
}
